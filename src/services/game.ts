"use server";
import { allGames, delay } from "@/utils/endpoint";

const ITEMS_PER_PAGE = 12;
async function getGamesByPageAndGenre(page: number, genre: string | null) {
  let games = allGames;

  if (genre) {
    games = games.filter((game) => game.genre.toLowerCase() === genre.toLowerCase());
  }

  if (page < 1 || isNaN(page)) page = 1;

  // Mock a delay to simulate a real API
  await delay(2000);

  const fromIndex = (page - 1) * ITEMS_PER_PAGE;
  const toIndex = page * ITEMS_PER_PAGE;
  const totalPages = Math.ceil(games.length / ITEMS_PER_PAGE);

  games = games.slice(fromIndex, toIndex);

  const currentPage = page;

  return { totalPages, currentPage, games };
}

export { getGamesByPageAndGenre };
