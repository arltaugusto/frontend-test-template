import { getGamesByPageAndGenre } from "@/services/game";

import { GamesGrid } from "./components/GamesGrid";

interface HomeScreenProps {
  genre?: string | null;
}

export default async function HomeScreen({ genre }: HomeScreenProps) {
  const { totalPages, games, currentPage } = await getGamesByPageAndGenre(1, genre || null);

  return (
    <GamesGrid games={games} initialTotalPages={totalPages} initialCurrentPage={currentPage} />
  );
}

export { HomeScreen };
