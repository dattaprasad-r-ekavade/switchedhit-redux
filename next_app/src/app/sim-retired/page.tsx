import Link from "next/link";
import { SiteChrome } from "@/components/site/SiteChrome";

export const metadata = {
  title: "Management sim retired",
  description:
    "The old SwitchedHit cricket management sim is discontinued. Replay is the product now.",
};

export default function SimRetiredPage() {
  return (
    <SiteChrome>
      <main className="mx-auto w-full max-w-3xl px-5 py-16">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
          Notice
        </p>
        <h1 className="display mt-3 text-4xl">The management sim is retired.</h1>
        <p className="mt-5 text-lg text-[var(--muted)]">
          Daily 8 PM matches, auctions, and the old club sim are discontinued.
          SwitchedHit is now a replay engine: watch packaged historical innings
          as a stadium simulation.
        </p>
        <p className="mt-4 text-[var(--muted)]">
          Existing sim users can join the Replay waitlist by starring a match in
          the library — no second cricket app on this domain.
        </p>
        <Link href="/library" className="btn primary mt-8 inline-flex">
          Open Replay library
        </Link>
      </main>
    </SiteChrome>
  );
}
