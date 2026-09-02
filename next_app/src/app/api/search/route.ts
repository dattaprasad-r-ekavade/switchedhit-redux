import { searchMatches } from "@/lib/data/catalog";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") ?? "";
  return Response.json({ query: q, matches: searchMatches(q) });
}
