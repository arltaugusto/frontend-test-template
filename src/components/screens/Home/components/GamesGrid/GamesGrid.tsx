"use client";

import { Button } from "@/components/atoms/Button";
import { Spinner } from "@/components/atoms/Spinner";
import { GameCard } from "@/components/molecules/GameCard";
import { getGamesByPageAndGenre } from "@/services/game";
import { Game } from "@/utils/endpoint";
import { useState } from "react";

interface GameGridProps {
  games: Game[];
  initialTotalPages: number;
  initialCurrentPage: number;
  genre?: string | null;
}

const GamesGrid = ({ games, initialTotalPages, initialCurrentPage, genre }: GameGridProps) => {
  const [allGames, setAllGames] = useState(games);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [currentPage, setCurrentPage] = useState(initialCurrentPage);

  const handleSeeMoreClick = async () => {
    setIsLoading(true);
    const {
      games: responseGames,
      currentPage: responseCurrentPage,
      totalPages: responseTotalPages,
    } = await getGamesByPageAndGenre(currentPage + 1, genre || null);
    setAllGames([...allGames, ...responseGames]);
    setTotalPages(responseTotalPages);
    setCurrentPage(responseCurrentPage);
    setIsLoading(false);
  };
  return (
    <div className="flex flex-col gap-y-9 2xl:gap-y-12">
      <div className="flex flex-col gap-y-6 pr-12 2xl:grid 2xl:grid-cols-3 2xl:gap-12">
        {allGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      {currentPage < totalPages && (
        <Button
          onClick={handleSeeMoreClick}
          className="w-full uppercase 2xl:max-w-[137px]"
          variant="primary"
          disabled={isLoading}
        >
          {!isLoading ? "see more" : <Spinner className="h-4 w-4 border-white" />}
        </Button>
      )}
    </div>
  );
};

export { GamesGrid };
