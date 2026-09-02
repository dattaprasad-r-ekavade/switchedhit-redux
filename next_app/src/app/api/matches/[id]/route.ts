import { allMatchIds, getMatch } from "@/lib/data/catalog";

export function generateStaticParams() {
  return allMatchIds().map((id) => ({ id }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const match = getMatch(id);
  if (!match) {
    return Response.json({ error: "not_found" }, { status: 404 });
  }
  return Response.json(match);
}
