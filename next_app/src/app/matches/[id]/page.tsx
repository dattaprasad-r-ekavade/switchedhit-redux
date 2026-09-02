import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteChrome } from "@/components/site/SiteChrome";
import { allMatchIds, getMatch } from "@/lib/data/catalog";

export function generateStaticParams() {
  return allMatchIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const match = getMatch(id);
  return {
    title: match?.seoTitle ?? "Match",
    description: match
      ? `${match.teams[0]} vs ${match.teams[1]} — unofficial 3D replay. Not a live broadcast.`
      : "Match replay",
  };
}

export default async function MatchPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const match = getMatch(id);
  if (!match) notFound();

  return (
    <SiteChrome>
      <main className="mx-auto w-full max-w-4xl px-5 py-12">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
          {match.competition} · {match.date}
        </p>
        <h1 className="display mt-3 text-5xl leading-tight">
          {match.teams[0]} vs {match.teams[1]}
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)]">{match.venue}</p>
        <p className="mt-2">{match.result}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={`/matches/${match.id}/play`} className="btn primary">
            Play replay
          </Link>
          <Link href={`/matches/${match.id}/scorecard`} className="btn">
            Scorecard
          </Link>
        </div>
        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="card">
            <dt className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
              Fours
            </dt>
            <dd className="display text-3xl">{match.highlightCounts.four}</dd>
          </div>
          <div className="card">
            <dt className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
              Sixes
            </dt>
            <dd className="display text-3xl">{match.highlightCounts.six}</dd>
          </div>
          <div className="card">
            <dt className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
              Wickets
            </dt>
            <dd className="display text-3xl">{match.highlightCounts.wicket}</dd>
          </div>
        </dl>
        <p className="mt-8 text-sm text-[var(--muted)]">{match.disclaimer}</p>
      </main>
    </SiteChrome>
  );
}
