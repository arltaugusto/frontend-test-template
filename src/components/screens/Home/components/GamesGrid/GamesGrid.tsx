"use client";

import { Button } from "@/components/atoms/Button";
import { Spinner } from "@/components/atoms/Spinner";
import { GameCard } from "@/components/molecules/GameCard";
import { getGamesByPageAndGenre } from "@/services/game";
import { Game } from "@/utils/endpoint";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    setAllGames(games);
    setTotalPages(initialTotalPages);
    setCurrentPage(initialCurrentPage);
  }, [games, initialTotalPages, initialCurrentPage]);

  const handleSeeMoreClick = async () => {
    setIsLoading(true);
    const selectedGenre = genre === "all" ? null : genre;
    const {
      games: responseGames,
      currentPage: responseCurrentPage,
      totalPages: responseTotalPages,
    } = await getGamesByPageAndGenre(currentPage + 1, selectedGenre || null);
    setAllGames([...allGames, ...responseGames]);
    setTotalPages(responseTotalPages);
    setCurrentPage(responseCurrentPage);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col gap-y-9 2xl:gap-y-12">
      <div
        role="grid"
        className="flex flex-col gap-y-6 transition-all 2xl:grid 2xl:grid-cols-3 2xl:place-items-center 2xl:gap-12 2xl:pr-12"
      >
        {allGames.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            className="2xl:h-full 2xl:min-w-[380px] 2xl:max-w-[380px] 2xl:justify-between"
          />
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
