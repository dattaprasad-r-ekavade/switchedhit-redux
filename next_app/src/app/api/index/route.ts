import { COMPETITIONS, listMatches } from "@/lib/data/catalog";

export const dynamic = "force-static";

export async function GET() {
  return Response.json({
    competitions: COMPETITIONS,
    matches: listMatches(),
  });
}
