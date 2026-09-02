import Link from "next/link";
import { notFound } from "next/navigation";
import { ReplayEngine } from "@/components/player/ReplayEngine";
import { allMatchIds, getMatch } from "@/lib/data/catalog";
import { firstEventOfOver } from "@/lib/replay/highlights";

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
  return { title: match ? `Play · ${match.seoTitle}` : "Play" };
}

export default async function PlayPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ over?: string; innings?: string }>;
}) {
  const { id } = await params;
  const query = await searchParams;
  const match = getMatch(id);
  if (!match) notFound();

  const innings = query.innings === "2" ? 2 : 1;
  const over = query.over ? Number.parseInt(query.over, 10) : undefined;
  const startIndex =
    over !== undefined && Number.isFinite(over)
      ? (firstEventOfOver(match.events, innings, over) ?? 0)
      : 0;

  return (
    <div className="site-shell">
      <header className="border-b border-[rgba(246,231,178,0.08)] px-4 py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="display text-lg">
            SwitchedHit
          </Link>
          <Link href={`/matches/${match.id}`} className="text-sm text-[var(--muted)]">
            Match page
          </Link>
        </div>
      </header>
      <ReplayEngine match={match} startIndex={startIndex} />
    </div>
  );
}
