import Link from "next/link";
import { SiteChrome } from "@/components/site/SiteChrome";

export default function NotFound() {
  return (
    <SiteChrome>
      <main className="mx-auto max-w-xl px-5 py-20">
        <h1 className="display text-4xl">Not in the index</h1>
        <p className="mt-3 text-[var(--muted)]">
          That match is not packaged yet. Label stays “available when data is
          published.”
        </p>
        <Link href="/library" className="btn primary mt-6 inline-flex">
          Back to library
        </Link>
      </main>
    </SiteChrome>
  );
}
