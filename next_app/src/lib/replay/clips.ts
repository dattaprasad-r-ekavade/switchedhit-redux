import type { ClipId, DeliveryInput, PlaybackSpeed } from "./types";

/** Default clip lengths from the replay plan. */
export const CLIP_LENGTH_MS: Record<ClipId, number> = {
  DOT: 2500,
  RUN_1: 3000,
  RUN_2: 4000,
  RUN_3: 5000,
  FOUR: 4000,
  SIX: 4500,
  WICKET: 5000,
  WIDE: 2500,
  NOBALL: 3000,
};

/**
 * Cricsheet signal → clip id (plan §3.2).
 * Wides / no-balls win, then wicket, then batter runs.
 * Byes/leg-byes map off runs.total. Five is treated as FOUR.
 */
export function clipFor(delivery: DeliveryInput): ClipId {
  if (delivery.extrasType === "wides") return "WIDE";
  if (delivery.extrasType === "noballs") return "NOBALL";
  if (delivery.wicketKind) return "WICKET";

  const batterRuns = delivery.runsBatter;
  if (batterRuns === 6) return "SIX";
  if (batterRuns === 4 || batterRuns === 5) return "FOUR";
  if (batterRuns === 3) return "RUN_3";
  if (batterRuns === 2) return "RUN_2";
  if (batterRuns === 1) return "RUN_1";

  if (delivery.extrasType === "byes" || delivery.extrasType === "legbyes") {
    const total = delivery.runsBatter + delivery.extrasRuns;
    if (total >= 4) return "FOUR";
    if (total === 3) return "RUN_3";
    if (total === 2) return "RUN_2";
    if (total === 1) return "RUN_1";
  }

  return "DOT";
}

/** At 4x, skip clip tails so a T20 can finish in ~12–15 min. */
export function durationFor(clip: ClipId, speed: PlaybackSpeed): number {
  const base = CLIP_LENGTH_MS[clip];
  if (speed === 4) return Math.max(550, Math.round(base * 0.28));
  return Math.round(base / speed);
}

export function clipLabel(clip: ClipId): string {
  switch (clip) {
    case "DOT":
      return "Dot";
    case "RUN_1":
      return "Single";
    case "RUN_2":
      return "Two";
    case "RUN_3":
      return "Three";
    case "FOUR":
      return "Four";
    case "SIX":
      return "Six";
    case "WICKET":
      return "Wicket";
    case "WIDE":
      return "Wide";
    case "NOBALL":
      return "No-ball";
  }
}
