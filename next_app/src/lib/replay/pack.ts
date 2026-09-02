import { clipFor, CLIP_LENGTH_MS } from "./clips";
import type {
  BatterCard,
  BowlerCard,
  DeliveryInput,
  InningsCard,
  MatchIndexItem,
  PackagedMatch,
  PlaybackEvent,
} from "./types";

type ScriptBall =
  | { type: "runs"; n: number }
  | { type: "wide"; n?: number }
  | { type: "noball"; n?: number }
  | { type: "bye"; n: number }
  | { type: "legbye"; n: number }
  | { type: "wicket"; kind: string; n?: number };

type InningsScript = {
  battingTeam: string;
  bowlingTeam: string;
  order: string[];
  bowlers: string[];
  balls: ScriptBall[];
};

type MatchScript = Omit<MatchIndexItem, "highlightCounts" | "eventCount"> & {
  battingFirst: string;
  disclaimer: string;
  innings: InningsScript[];
};

type BatterLive = BatterCard;
type BowlerLive = BowlerCard;

function oversFromLegalBalls(legal: number): string {
  return `${Math.floor(legal / 6)}.${legal % 6}`;
}

function commentaryFor(delivery: DeliveryInput, clip: PlaybackEvent["clip"]): string {
  const extra = delivery.extrasRuns ? ` + ${delivery.extrasRuns} extra` : "";
  switch (clip) {
    case "DOT":
      return `${delivery.bowler} to ${delivery.batter} — no run.`;
    case "RUN_1":
      return `${delivery.batter} steals a single.`;
    case "RUN_2":
      return `${delivery.batter} pushes two.`;
    case "RUN_3":
      return `Three runs. ${delivery.batter} keeps the strike.`;
    case "FOUR":
      return `FOUR. ${delivery.batter} finds the rope.`;
    case "SIX":
      return `SIX. ${delivery.batter} clears the rope.`;
    case "WICKET":
      return `OUT. ${delivery.playerOut} — ${delivery.wicketKind}.`;
    case "WIDE":
      return `Wide from ${delivery.bowler}${extra}.`;
    case "NOBALL":
      return `No-ball. Free hit coming.${extra}`;
  }
}

function ensureBatter(map: Map<string, BatterLive>, name: string) {
  let row = map.get(name);
  if (!row) {
    row = { name, runs: 0, balls: 0, fours: 0, sixes: 0, out: null };
    map.set(name, row);
  }
  return row;
}

function ensureBowler(map: Map<string, BowlerLive>, name: string) {
  let row = map.get(name);
  if (!row) {
    row = { name, balls: 0, runs: 0, wickets: 0, extras: 0 };
    map.set(name, row);
  }
  return row;
}

function toDelivery(
  ball: ScriptBall,
  batter: string,
  nonStriker: string,
  bowler: string,
): DeliveryInput {
  switch (ball.type) {
    case "runs":
      return {
        batter,
        nonStriker,
        bowler,
        runsBatter: ball.n,
        extrasRuns: 0,
      };
    case "wide":
      return {
        batter,
        nonStriker,
        bowler,
        runsBatter: 0,
        extrasType: "wides",
        extrasRuns: ball.n ?? 1,
      };
    case "noball":
      return {
        batter,
        nonStriker,
        bowler,
        runsBatter: ball.n ?? 0,
        extrasType: "noballs",
        extrasRuns: 1,
      };
    case "bye":
      return {
        batter,
        nonStriker,
        bowler,
        runsBatter: 0,
        extrasType: "byes",
        extrasRuns: ball.n,
      };
    case "legbye":
      return {
        batter,
        nonStriker,
        bowler,
        runsBatter: 0,
        extrasType: "legbyes",
        extrasRuns: ball.n,
      };
    case "wicket":
      return {
        batter,
        nonStriker,
        bowler,
        runsBatter: ball.n ?? 0,
        extrasRuns: 0,
        wicketKind: ball.kind,
        playerOut: batter,
      };
  }
}

function buildInnings(
  script: InningsScript,
  inningsNo: 1 | 2,
  startIndex: number,
): { events: PlaybackEvent[]; card: InningsCard } {
  let striker = script.order[0];
  let nonStriker = script.order[1];
  let nextBatter = 2;
  let legalBalls = 0;
  let runs = 0;
  let wickets = 0;
  let thisOver: string[] = [];
  let overNumber = 0;
  let ballsThisOver = 0;
  let bowlerIndex = 0;
  const batters = new Map<string, BatterLive>();
  const bowlers = new Map<string, BowlerLive>();
  ensureBatter(batters, striker);
  ensureBatter(batters, nonStriker);

  const events: PlaybackEvent[] = [];

  const rotate = () => {
    const tmp = striker;
    striker = nonStriker;
    nonStriker = tmp;
  };

  for (const ball of script.balls) {
    const bowler = script.bowlers[bowlerIndex] ?? script.bowlers[0];
    const delivery = toDelivery(ball, striker, nonStriker, bowler);
    const clip = clipFor(delivery);
    const totalRuns = delivery.runsBatter + delivery.extrasRuns;
    const legal = delivery.extrasType !== "wides" && delivery.extrasType !== "noballs";

    const batterRow = ensureBatter(batters, delivery.batter);
    const nonRow = ensureBatter(batters, delivery.nonStriker);
    const bowlerRow = ensureBowler(bowlers, delivery.bowler);

    if (legal) {
      batterRow.balls += 1;
      bowlerRow.balls += 1;
    }
    batterRow.runs += delivery.runsBatter;
    if (clip === "FOUR") batterRow.fours += 1;
    if (clip === "SIX") batterRow.sixes += 1;
    bowlerRow.runs += totalRuns;
    if (delivery.extrasType) bowlerRow.extras += delivery.extrasRuns;
    if (delivery.wicketKind) {
      batterRow.out = delivery.wicketKind;
      bowlerRow.wickets += 1;
      wickets += 1;
    }

    runs += totalRuns;
    const token =
      clip === "WICKET"
        ? "W"
        : clip === "WIDE"
          ? `${delivery.extrasRuns}wd`
          : clip === "NOBALL"
            ? `${totalRuns}nb`
            : String(totalRuns);
    thisOver.push(token);

    if (legal) {
      legalBalls += 1;
      ballsThisOver += 1;
    }

    events.push({
      index: startIndex + events.length,
      innings: inningsNo,
      battingTeam: script.battingTeam,
      bowlingTeam: script.bowlingTeam,
      over: overNumber,
      ballInOver: ballsThisOver,
      legalBall: legal,
      batter: delivery.batter,
      nonStriker: delivery.nonStriker,
      bowler: delivery.bowler,
      clip,
      durationMs: CLIP_LENGTH_MS[clip],
      commentary: commentaryFor(delivery, clip),
      runsBatter: delivery.runsBatter,
      extrasType: delivery.extrasType,
      extrasRuns: delivery.extrasRuns,
      totalRuns,
      wicketKind: delivery.wicketKind,
      playerOut: delivery.playerOut,
      snapshot: {
        inningsRuns: runs,
        inningsWickets: wickets,
        overs: oversFromLegalBalls(legalBalls),
        thisOver: [...thisOver],
        batterRuns: batterRow.runs,
        batterBalls: batterRow.balls,
        nonStrikerRuns: nonRow.runs,
        nonStrikerBalls: nonRow.balls,
        bowlerOvers: oversFromLegalBalls(bowlerRow.balls),
        bowlerRuns: bowlerRow.runs,
        bowlerWickets: bowlerRow.wickets,
      },
    });

    const rotateOn =
      delivery.extrasType === "byes" || delivery.extrasType === "legbyes"
        ? delivery.extrasRuns
        : delivery.extrasType === "wides"
          ? 0
          : delivery.runsBatter;
    if (rotateOn % 2 === 1) rotate();

    if (delivery.wicketKind) {
      const incoming = script.order[nextBatter];
      nextBatter += 1;
      if (incoming) {
        ensureBatter(batters, incoming);
        striker = incoming;
      }
    }

    if (ballsThisOver === 6) {
      rotate();
      overNumber += 1;
      ballsThisOver = 0;
      thisOver = [];
      bowlerIndex = (bowlerIndex + 1) % script.bowlers.length;
    }
  }

  return {
    events,
    card: {
      team: script.battingTeam,
      runs,
      wickets,
      overs: oversFromLegalBalls(legalBalls),
      batters: [...batters.values()],
      bowlers: [...bowlers.values()],
    },
  };
}

export function packageMatch(script: MatchScript): PackagedMatch {
  const { innings, ...meta } = script;
  const events: PlaybackEvent[] = [];
  const scorecard: InningsCard[] = [];
  for (let i = 0; i < innings.length; i += 1) {
    const built = buildInnings(innings[i], (i + 1) as 1 | 2, events.length);
    events.push(...built.events);
    scorecard.push(built.card);
  }
  const highlightCounts = {
    four: events.filter((e) => e.clip === "FOUR").length,
    six: events.filter((e) => e.clip === "SIX").length,
    wicket: events.filter((e) => e.clip === "WICKET").length,
  };
  return {
    ...meta,
    highlightCounts,
    eventCount: events.length,
    events,
    scorecard,
  };
}


