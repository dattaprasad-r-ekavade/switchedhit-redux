import { SiteChrome } from "@/components/site/SiteChrome";
import { COMPETITIONS } from "@/lib/data/catalog";
import { LibrarySearch } from "./LibrarySearch";

export const metadata = {
  title: "Library",
  description: "Searchable archive of packaged cricket replays.",
};

export default function LibraryPage() {
  return (
    <SiteChrome>
      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <h1 className="display text-4xl">Library</h1>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          Pick a competition, then a match. Packaged JSON is small — the client
          downloads one match, not the archive.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {COMPETITIONS.map((comp) => (
            <a
              key={comp.slug}
              href={`/competitions/${comp.slug}`}
              className="btn"
            >
              {comp.name}
            </a>
          ))}
        </div>
        <LibrarySearch />
      </main>
    </SiteChrome>
  );
}
