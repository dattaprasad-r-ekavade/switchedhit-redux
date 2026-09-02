"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { durationFor } from "@/lib/replay/clips";
import {
  buildHighlightIndex,
  firstEventOfOver,
  nextAfter,
  oversInInnings,
} from "@/lib/replay/highlights";
import type { PackagedMatch, PlaybackSpeed, ScoreSnapshot } from "@/lib/replay/types";
import { Stadium } from "./Stadium";

export function ReplayEngine({
  match,
  startIndex = 0,
}: {
  match: PackagedMatch;
  startIndex?: number;
}) {
  "use no memo";
  const events = match.events;
  const lastIndex = Math.max(events.length - 1, 0);
  const highlights = useMemo(() => buildHighlightIndex(events), [events]);
  const [index, setIndex] = useState(() =>
    Math.min(Math.max(startIndex, 0), lastIndex),
  );
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState<PlaybackSpeed>(
    match.matchType === "Test" ? 4 : 1,
  );
  const [muted, setMuted] = useState(true);
  const [overPad, setOverPad] = useState(false);
  const [shareNote, setShareNote] = useState<string | null>(null);
  const [playGen, setPlayGen] = useState(0);
  const speedRef = useRef(speed);
  speedRef.current = speed;

  const event = events[index];
  const ended = index >= lastIndex && !playing;

  useEffect(() => {
    if (!playing) return;
    if (events.length === 0) {
      setPlaying(false);
      return;
    }

    let cancelled = false;
    let timer = 0;

    const current = events[index];
    if (!current) {
      setPlaying(false);
      return;
    }

    timer = window.setTimeout(() => {
      if (cancelled) return;
      if (index >= events.length - 1) {
        setPlaying(false);
        return;
      }
      setIndex(index + 1);
    }, durationFor(current.clip, speedRef.current));
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [playing, index]);

  if (!event) {
    return <p className="p-8">No deliveries in this pack.</p>;
  }

  const emptySnapshot: ScoreSnapshot = {
    inningsRuns: 0,
    inningsWickets: 0,
    overs: "0.0",
    thisOver: [],
    batterRuns: 0,
    batterBalls: 0,
    nonStrikerRuns: 0,
    nonStrikerBalls: 0,
    bowlerOvers: "0.0",
    bowlerRuns: 0,
    bowlerWickets: 0,
  };
  const previous = index === 0 ? undefined : events[index - 1];
  const hud = previous?.snapshot ?? emptySnapshot;

  const battingColor =
    event.battingTeam === match.teams[0] ? match.jersey[0] : match.jersey[1];
  const bowlingColor =
    event.bowlingTeam === match.teams[0] ? match.jersey[0] : match.jersey[1];

  const jump = (next: number | undefined) => {
    if (next === undefined) return;
    setIndex(next);
  };

  const jumpOver = (delta: number) => {
    const nextOver = event.over + delta;
    const found = firstEventOfOver(events, event.innings, nextOver);
    if (found !== undefined) jump(found);
  };

  const shareOver = async () => {
    const url = `${window.location.origin}/matches/${match.id}/play?over=${event.over}&innings=${event.innings}`;
    try {
      await navigator.clipboard.writeText(url);
      setShareNote("Over link copied");
    } catch {
      setShareNote(url);
    }
    window.setTimeout(() => setShareNote(null), 2200);
  };

  const overs = oversInInnings(events, event.innings);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
            {match.competition}
          </p>
          <h1 className="display text-2xl">
            {match.teams[0]} vs {match.teams[1]}
          </h1>
        </div>
        <div className="flex gap-2">
          <span className="btn !cursor-default">
            Ball {index + 1}/{events.length}
          </span>
          <Link href={`/matches/${match.id}/scorecard`} className="btn">
            Scorecard
          </Link>
        </div>
      </div>

      <>
          <Stadium
            clip={event.clip}
            clipKey={index + playGen * 1000}
            battingColor={battingColor}
            bowlingColor={bowlingColor}
            muted={muted}
            playing={playing}
          />

          <div className="hud">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                  {event.battingTeam} innings
                </p>
                <p className="font-mono text-3xl leading-none">
                  {hud.inningsRuns}/{hud.inningsWickets}
                  <span className="ml-2 text-base text-[var(--muted)]">
                    ({hud.overs})
                  </span>
                </p>
              </div>
              <p className="max-w-xl text-sm text-[var(--cream)]">{event.commentary}</p>
            </div>
            <div className="grid gap-2 text-sm sm:grid-cols-3">
              <p>
                {previous?.batter ?? event.batter}{" "}
                <span className="text-[var(--muted)]">
                  {hud.batterRuns}({hud.batterBalls})
                </span>
              </p>
              <p>
                {previous?.nonStriker ?? event.nonStriker}{" "}
                <span className="text-[var(--muted)]">
                  {hud.nonStrikerRuns}({hud.nonStrikerBalls})
                </span>
              </p>
              <p>
                {previous?.bowler ?? event.bowler}{" "}
                <span className="text-[var(--muted)]">
                  {hud.bowlerOvers}-{hud.bowlerRuns}-
                  {hud.bowlerWickets}
                </span>
              </p>
            </div>
            <div className="over-pills">
              {hud.thisOver.map((ball, i) => (
                <span
                  key={`${ball}-${i}`}
                  className={
                    ball.includes("W")
                      ? "is-w"
                      : ball.startsWith("4")
                        ? "is-4"
                        : ball.startsWith("6")
                          ? "is-6"
                          : ""
                  }
                >
                  {ball}
                </span>
              ))}
            </div>
          </div>

          <div className="controls">
            <button
              className="btn primary"
              onClick={() => {
                if (ended) {
                  setIndex(0);
                  setPlayGen((value) => value + 1);
                  setPlaying(true);
                  return;
                }
                if (playing) {
                  setPlaying(false);
                  return;
                }
                setPlayGen((value) => value + 1);
                setPlaying(true);
              }}
            >
              {playing ? "Pause" : ended ? "Replay" : "Play"}
            </button>
            {([1, 2, 4] as PlaybackSpeed[]).map((value) => (
              <button
                key={value}
                className={`btn ${speed === value ? "active" : ""}`}
                onClick={() => setSpeed(value)}
              >
                {value}x
              </button>
            ))}
            <button className="btn" onClick={() => jumpOver(-1)}>
              Prev over
            </button>
            <button className="btn" onClick={() => jumpOver(1)}>
              Next over
            </button>
            <button
              className="btn"
              onClick={() => jump(nextAfter(index, highlights.four))}
            >
              Next 4
            </button>
            <button
              className="btn"
              onClick={() => jump(nextAfter(index, highlights.six))}
            >
              Next 6
            </button>
            <button
              className="btn"
              onClick={() => jump(nextAfter(index, highlights.wicket))}
            >
              Next W
            </button>
            <button className="btn" onClick={() => setOverPad((v) => !v)}>
              Jump to over
            </button>
            <button className="btn" onClick={() => setMuted((v) => !v)}>
              {muted ? "Unmute" : "Mute"}
            </button>
            <button className="btn" onClick={shareOver}>
              Share this over
            </button>
          </div>
          {shareNote ? (
            <p className="text-sm text-[var(--gold)]">{shareNote}</p>
          ) : null}

          {overPad ? (
            <div className="card">
              <p className="mb-3 text-sm text-[var(--muted)]">
                Innings {event.innings} — jump to over
              </p>
              <div className="flex flex-wrap gap-2">
                {overs.map((over) => (
                  <button
                    key={over}
                    className={`btn ${over === event.over ? "active" : ""}`}
                    onClick={() => {
                      jump(firstEventOfOver(events, event.innings, over));
                      setOverPad(false);
                    }}
                  >
                    {over + 1}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
      </>

      <p className="disclaimer-strip">{match.disclaimer}</p>
    </div>
  );
}
