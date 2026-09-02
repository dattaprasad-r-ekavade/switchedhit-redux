import Link from "next/link";
import type { MatchIndexItem } from "@/lib/replay/types";

export function MatchCard({ match }: { match: MatchIndexItem }) {
  return (
    <Link href={`/matches/${match.id}`} className="card block">
      <div className="mb-3 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
        <span>{match.competition}</span>
        <span>{match.date}</span>
      </div>
      <h3 className="display text-2xl leading-tight">
        {match.teams[0]}{" "}
        <span className="text-[var(--gold)]">vs</span> {match.teams[1]}
      </h3>
      <p className="mt-2 text-sm text-[var(--muted)]">{match.venue}</p>
      <p className="mt-3 text-sm">{match.result}</p>
      <div className="mt-4 flex gap-2 text-xs">
        <span className="rounded-full bg-[rgba(94,224,200,0.15)] px-2 py-1 text-[var(--four)]">
          {match.highlightCounts.four} fours
        </span>
        <span className="rounded-full bg-[rgba(245,197,66,0.15)] px-2 py-1 text-[var(--six)]">
          {match.highlightCounts.six} sixes
        </span>
        <span className="rounded-full bg-[rgba(212,69,47,0.18)] px-2 py-1 text-[#ffb4a8]">
          {match.highlightCounts.wicket} wickets
        </span>
      </div>
    </Link>
  );
}
