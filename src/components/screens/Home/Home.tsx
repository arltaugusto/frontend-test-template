import { getGamesByPageAndGenre } from "@/services/game";
import { GameCard } from "@/components/molecules/GameCard";

interface HomeScreenProps {
  genre?: string | null;
}

export default async function HomeScreen({ genre }: HomeScreenProps) {
  const { totalPages, games, currentPage } = await getGamesByPageAndGenre(1, genre);

  return (
    <>
      {games.map((game) => (
        <GameCard game={game} />
      ))}
    </>
  );
}

export { HomeScreen };
