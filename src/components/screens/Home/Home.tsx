import { getGamesByPageAndGenre } from "@/services/game";

import { GamesGrid } from "./components/GamesGrid";

interface HomeScreenProps {
  genre?: string | null;
}

export default async function HomeScreen({ genre }: HomeScreenProps) {
  const selectedGenre = genre === "all" ? null : genre;
  const { totalPages, games, currentPage } = await getGamesByPageAndGenre(1, selectedGenre || null);

  return (
    <GamesGrid games={games} initialTotalPages={totalPages} initialCurrentPage={currentPage} />
  );
}

export { HomeScreen };
