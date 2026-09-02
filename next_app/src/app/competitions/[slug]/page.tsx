import { notFound } from "next/navigation";
import { MatchCard } from "@/components/library/MatchCard";
import { SiteChrome } from "@/components/site/SiteChrome";
import {
  allCompetitionSlugs,
  COMPETITIONS,
  listMatchesByCompetition,
} from "@/lib/data/catalog";

export function generateStaticParams() {
  return allCompetitionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const competition = COMPETITIONS.find((item) => item.slug === slug);
  return { title: competition?.name ?? "Competition" };
}

export default async function CompetitionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const competition = COMPETITIONS.find((item) => item.slug === slug);
  if (!competition) notFound();
  const matches = listMatchesByCompetition(slug);

  return (
    <SiteChrome>
      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
          Competition
        </p>
        <h1 className="display mt-2 text-4xl">{competition.name}</h1>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">{competition.blurb}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </main>
    </SiteChrome>
  );
}
