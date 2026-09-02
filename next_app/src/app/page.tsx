import Link from "next/link";
import { MatchCard } from "@/components/library/MatchCard";
import { SiteChrome } from "@/components/site/SiteChrome";
import { COMPETITIONS, listMatches } from "@/lib/data/catalog";

export default function Home() {
  const matches = listMatches();
  return (
    <SiteChrome>
      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold)]">
              switchedhit.com
            </p>
            <h1 className="display mt-3 max-w-xl text-5xl leading-[1.05] sm:text-6xl">
              Replay any match.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[var(--muted)]">
              Cricbuzz is the score. Hotstar is the broadcast. SwitchedHit is
              the replay — nine action clips mapped to real ball-by-ball
              records. First innings free, always.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/library" className="btn primary">
                Open the library
              </Link>
              <Link href={`/matches/${matches[0].id}/play`} className="btn">
                Watch the spike match
              </Link>
            </div>
          </div>
          <div className="card">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
              Core loop
            </p>
            <ol className="mt-4 space-y-3 text-[var(--cream)]">
              <li>1. Pick a competition</li>
              <li>2. Pick a match</li>
              <li>3. Press Play — 1x / 2x / 4x, skip overs, jump to 4 / 6 / W</li>
            </ol>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="display text-3xl">Catalogue</h2>
            <Link href="/library" className="text-sm text-[var(--gold)]">
              All competitions
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {matches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-4 md:grid-cols-3">
          {COMPETITIONS.map((comp) => (
            <Link key={comp.slug} href={`/competitions/${comp.slug}`} className="card">
              <h3 className="display text-2xl">{comp.name}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{comp.blurb}</p>
            </Link>
          ))}
        </section>
      </main>
    </SiteChrome>
  );
}
