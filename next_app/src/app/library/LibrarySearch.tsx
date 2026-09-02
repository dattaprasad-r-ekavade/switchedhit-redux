"use client";

import { useMemo, useState } from "react";
import { MatchCard } from "@/components/library/MatchCard";
import { searchMatches } from "@/lib/data/catalog";

export function LibrarySearch() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchMatches(query), [query]);
  return (
    <div className="mt-8">
      <label className="block text-sm text-[var(--muted)]" htmlFor="q">
        Search teams or competitions
      </label>
      <input
        id="q"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Mumbai, Chennai, Tests…"
        className="mt-2 w-full max-w-md rounded-full border border-[rgba(246,231,178,0.18)] bg-black/20 px-4 py-2 outline-none focus:border-[var(--gold)]"
      />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {results.length ? (
          results.map((match) => <MatchCard key={match.id} match={match} />)
        ) : (
          <p className="text-[var(--muted)]">No matches in this sample index.</p>
        )}
      </div>
    </div>
  );
}
