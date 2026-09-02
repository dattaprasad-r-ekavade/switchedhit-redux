import { packageMatch } from "@/lib/replay/pack";
import type { PackagedMatch } from "@/lib/replay/types";

const DISCLAIMER =
  "Unofficial 3D replay. Not a live broadcast. Not affiliated with BCCI or ICC. Sample pack for the switchedhit.com spike — not a ball-accurate archive of a licensed fixture.";

const MUMBAI = [
  "R. Sharma",
  "Q. de Kock",
  "S. Yadav",
  "K. Pollard",
  "H. Pandya",
  "K. Pandya",
  "I. Kishan",
];
const CHENNAI_BOWL = ["D. Chahar", "S. Thakur", "I. Tahir", "R. Jadeja"];
const CHENNAI = [
  "F. du Plessis",
  "S. Watson",
  "S. Raina",
  "A. Rayudu",
  "MS Dhoni",
  "D. Bravo",
  "R. Jadeja",
];
const MUMBAI_BOWL = ["L. Malinga", "J. Bumrah", "H. Pandya", "R. Chahar"];

const PACKS: PackagedMatch[] = [
  packageMatch({
    id: "t20-2019-final",
    competition: "Indian T20 League",
    competitionSlug: "indian-t20-league",
    matchType: "T20",
    date: "2019-05-12",
    venue: "Generic stadium — Hyderabad",
    teams: ["Mumbai", "Chennai"],
    teamCodes: ["MUM", "CHE"],
    jersey: ["#1b4f9c", "#f4c430"],
    result: "Mumbai win by 1 run (sample script)",
    seoTitle: "Mumbai vs Chennai 2019 final 3D replay",
    battingFirst: "Mumbai",
    disclaimer: DISCLAIMER,
    innings: [
      {
        battingTeam: "Mumbai",
        bowlingTeam: "Chennai",
        order: MUMBAI,
        bowlers: CHENNAI_BOWL,
        balls: [
          { type: "runs", n: 0 },
          { type: "runs", n: 1 },
          { type: "runs", n: 4 },
          { type: "runs", n: 0 },
          { type: "wide" },
          { type: "runs", n: 2 },
          { type: "runs", n: 6 },
          { type: "runs", n: 0 },
          { type: "wicket", kind: "caught" },
          { type: "runs", n: 1 },
          { type: "noball", n: 1 },
          { type: "runs", n: 4 },
          { type: "runs", n: 3 },
          { type: "runs", n: 0 },
          { type: "runs", n: 1 },
          { type: "legbye", n: 1 },
          { type: "runs", n: 6 },
          { type: "runs", n: 0 },
          { type: "wicket", kind: "bowled" },
          { type: "runs", n: 4 },
          { type: "runs", n: 2 },
          { type: "bye", n: 1 },
          { type: "runs", n: 0 },
          { type: "runs", n: 4 },
          { type: "runs", n: 1 },
          { type: "wicket", kind: "stumped" },
        ],
      },
      {
        battingTeam: "Chennai",
        bowlingTeam: "Mumbai",
        order: CHENNAI,
        bowlers: MUMBAI_BOWL,
        balls: [
          { type: "runs", n: 4 },
          { type: "runs", n: 0 },
          { type: "runs", n: 1 },
          { type: "runs", n: 6 },
          { type: "wicket", kind: "lbw" },
          { type: "runs", n: 2 },
          { type: "runs", n: 0 },
          { type: "runs", n: 4 },
          { type: "runs", n: 1 },
          { type: "wide" },
          { type: "runs", n: 0 },
          { type: "runs", n: 1 },
          { type: "runs", n: 4 },
          { type: "runs", n: 6 },
          { type: "runs", n: 2 },
          { type: "wicket", kind: "caught" },
          { type: "runs", n: 0 },
          { type: "runs", n: 4 },
          { type: "runs", n: 1 },
        ],
      },
    ],
  }),
  packageMatch({
    id: "wt20-semis-sample",
    competition: "Men's T20 World Cup",
    competitionSlug: "wt20",
    matchType: "T20",
    date: "2024-06-27",
    venue: "Generic stadium — Guyana",
    teams: ["India", "England"],
    teamCodes: ["IND", "ENG"],
    jersey: ["#1c5aa0", "#c8102e"],
    result: "India win by 8 wickets (sample script)",
    seoTitle: "India vs England T20 World Cup 3D replay",
    battingFirst: "England",
    disclaimer: DISCLAIMER,
    innings: [
      {
        battingTeam: "England",
        bowlingTeam: "India",
        order: ["J. Buttler", "P. Salt", "J. Bairstow", "H. Brook", "J. Ali"],
        bowlers: ["A. Bumrah", "A. Singh", "K. Yadav"],
        balls: [
          { type: "runs", n: 4 },
          { type: "runs", n: 0 },
          { type: "runs", n: 6 },
          { type: "wicket", kind: "caught" },
          { type: "runs", n: 1 },
          { type: "runs", n: 0 },
          { type: "runs", n: 2 },
          { type: "wide" },
          { type: "runs", n: 4 },
          { type: "runs", n: 1 },
          { type: "noball", n: 0 },
          { type: "runs", n: 6 },
          { type: "wicket", kind: "bowled" },
        ],
      },
      {
        battingTeam: "India",
        bowlingTeam: "England",
        order: ["R. Sharma", "V. Kohli", "S. Yadav", "R. Pant"],
        bowlers: ["J. Archer", "A. Rashid"],
        balls: [
          { type: "runs", n: 4 },
          { type: "runs", n: 1 },
          { type: "runs", n: 6 },
          { type: "runs", n: 0 },
          { type: "runs", n: 2 },
          { type: "runs", n: 4 },
          { type: "wicket", kind: "caught" },
          { type: "runs", n: 1 },
          { type: "runs", n: 6 },
          { type: "runs", n: 4 },
        ],
      },
    ],
  }),
  packageMatch({
    id: "test-classic-sample",
    competition: "Tests",
    competitionSlug: "tests",
    matchType: "Test",
    date: "2019-08-25",
    venue: "Generic stadium — Leeds",
    teams: ["England", "Australia"],
    teamCodes: ["ENG", "AUS"],
    jersey: ["#1d4e89", "#186b3a"],
    result: "England win by 1 wicket (sample two-over cut)",
    seoTitle: "England vs Australia Test 3D replay",
    battingFirst: "England",
    disclaimer: DISCLAIMER,
    innings: [
      {
        battingTeam: "England",
        bowlingTeam: "Australia",
        order: ["B. Stokes", "J. Leach", "J. Root"],
        bowlers: ["P. Cummins", "N. Lyon"],
        balls: [
          { type: "runs", n: 0 },
          { type: "runs", n: 1 },
          { type: "runs", n: 4 },
          { type: "runs", n: 0 },
          { type: "runs", n: 2 },
          { type: "runs", n: 6 },
          { type: "runs", n: 0 },
          { type: "wide" },
          { type: "runs", n: 1 },
          { type: "wicket", kind: "lbw" },
          { type: "runs", n: 4 },
          { type: "runs", n: 0 },
          { type: "runs", n: 3 },
        ],
      },
    ],
  }),
];

const BY_ID = new Map(PACKS.map((pack) => [pack.id, pack]));

export const COMPETITIONS = [
  {
    slug: "indian-t20-league",
    name: "Indian T20 League",
    blurb: "Archive T20s. First innings always free.",
  },
  {
    slug: "wt20",
    name: "Men's T20 World Cup",
    blurb: "Skip to 4s, 6s and wickets from past knockouts.",
  },
  {
    slug: "tests",
    name: "Tests",
    blurb: "Long form. 4x is the default once you press play.",
  },
] as const;

export function listMatches() {
  return PACKS.map(
    ({
      events: _events,
      scorecard: _scorecard,
      battingFirst: _battingFirst,
      disclaimer: _disclaimer,
      ...item
    }) => item,
  );
}

export function getMatch(id: string) {
  return BY_ID.get(id);
}

export function listMatchesByCompetition(slug: string) {
  return listMatches().filter((match) => match.competitionSlug === slug);
}

export function searchMatches(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return listMatches();
  return listMatches().filter((match) => {
    const hay = [
      match.seoTitle,
      match.competition,
      match.venue,
      match.result,
      ...match.teams,
      ...match.teamCodes,
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}

export function allMatchIds() {
  return PACKS.map((pack) => pack.id);
}

export function allCompetitionSlugs() {
  return COMPETITIONS.map((c) => c.slug);
}
