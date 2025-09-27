import { getGamesByPageAndGenre } from "@/services/game";
import { availableFilters } from "@/utils/endpoint";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let page = parseInt(searchParams.get("page") ?? "1");
  const genre = searchParams.get("genre");

  const { totalPages, currentPage, games } = await getGamesByPageAndGenre(page, genre);

  return Response.json({ games, availableFilters, totalPages, currentPage });
}
