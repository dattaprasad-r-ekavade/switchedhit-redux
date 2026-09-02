import type { MetadataRoute } from "next";
import { allCompetitionSlugs, allMatchIds } from "@/lib/data/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://switchedhit.com";
  const staticRoutes = ["", "/library", "/settings", "/sim-retired"].map(
    (path) => ({
      url: `${origin}${path || "/"}`,
      lastModified: new Date("2026-09-02"),
    }),
  );
  const competitions = allCompetitionSlugs().map((slug) => ({
    url: `${origin}/competitions/${slug}`,
    lastModified: new Date("2026-09-02"),
  }));
  const matches = allMatchIds().flatMap((id) => [
    { url: `${origin}/matches/${id}`, lastModified: new Date("2026-09-02") },
    {
      url: `${origin}/matches/${id}/play`,
      lastModified: new Date("2026-09-02"),
    },
    {
      url: `${origin}/matches/${id}/scorecard`,
      lastModified: new Date("2026-09-02"),
    },
  ]);
  return [...staticRoutes, ...competitions, ...matches];
}
