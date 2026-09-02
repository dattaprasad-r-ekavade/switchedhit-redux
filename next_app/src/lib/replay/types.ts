export const CLIP_IDS = [
  "DOT",
  "RUN_1",
  "RUN_2",
  "RUN_3",
  "FOUR",
  "SIX",
  "WICKET",
  "WIDE",
  "NOBALL",
] as const;

export type ClipId = (typeof CLIP_IDS)[number];

export type ExtraType = "wides" | "noballs" | "byes" | "legbyes";

export type CameraCut = "bowler" | "square";

export type PlaybackSpeed = 1 | 2 | 4;

export type DeliveryInput = {
  batter: string;
  bowler: string;
  nonStriker: string;
  runsBatter: number;
  extrasType?: ExtraType;
  extrasRuns: number;
  wicketKind?: string;
  playerOut?: string;
};

export type ScoreSnapshot = {
  inningsRuns: number;
  inningsWickets: number;
  overs: string;
  thisOver: string[];
  batterRuns: number;
  batterBalls: number;
  nonStrikerRuns: number;
  nonStrikerBalls: number;
  bowlerOvers: string;
  bowlerRuns: number;
  bowlerWickets: number;
};

export type PlaybackEvent = {
  index: number;
  innings: 1 | 2;
  battingTeam: string;
  bowlingTeam: string;
  over: number;
  ballInOver: number;
  legalBall: boolean;
  batter: string;
  nonStriker: string;
  bowler: string;
  clip: ClipId;
  durationMs: number;
  commentary: string;
  runsBatter: number;
  extrasType?: ExtraType;
  extrasRuns: number;
  totalRuns: number;
  wicketKind?: string;
  playerOut?: string;
  snapshot: ScoreSnapshot;
};

export type BatterCard = {
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  out: string | null;
};

export type BowlerCard = {
  name: string;
  balls: number;
  runs: number;
  wickets: number;
  extras: number;
};

export type InningsCard = {
  team: string;
  runs: number;
  wickets: number;
  overs: string;
  batters: BatterCard[];
  bowlers: BowlerCard[];
};

export type MatchIndexItem = {
  id: string;
  competition: string;
  competitionSlug: string;
  matchType: "T20" | "ODI" | "Test";
  date: string;
  venue: string;
  teams: [string, string];
  teamCodes: [string, string];
  jersey: [string, string];
  result: string;
  highlightCounts: { four: number; six: number; wicket: number };
  eventCount: number;
  seoTitle: string;
};

export type PackagedMatch = MatchIndexItem & {
  events: PlaybackEvent[];
  scorecard: InningsCard[];
  battingFirst: string;
  disclaimer: string;
};
