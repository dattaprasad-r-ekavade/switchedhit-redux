import Link from "next/link";
import { notFound } from "next/navigation";
import { ScorecardView } from "@/components/scorecard/ScorecardView";
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
  return { title: match ? `Scorecard · ${match.seoTitle}` : "Scorecard" };
}

export default async function ScorecardPage({
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
          Scorecard · no 3D
        </p>
        <h1 className="display mt-2 text-4xl">
          {match.teams[0]} vs {match.teams[1]}
        </h1>
        <div className="mt-6 flex gap-3">
          <Link href={`/matches/${match.id}/play`} className="btn primary">
            Back to replay
          </Link>
          <Link href={`/matches/${match.id}`} className="btn">
            Match page
          </Link>
        </div>
        <div className="mt-8">
          <ScorecardView innings={match.scorecard} />
        </div>
      </main>
    </SiteChrome>
  );
}
