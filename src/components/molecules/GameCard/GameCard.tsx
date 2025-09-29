"use client";

import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { useCartContext } from "@/contexts/CartContext";
import { Game } from "@/utils/endpoint";
import clsx from "clsx";
import Image from "next/image";

interface GameCardProps {
  game: Game;
  className?: string;
}

function GameCard({ game, className }: GameCardProps) {
  const { cart, addItem, removeItem } = useCartContext();
  const isSaved = !!cart[game.id];

  const handleClick = () => {
    if (isSaved) {
      removeItem(game);
      return;
    }
    addItem(game);
  };

  return (
    <div
      className={clsx("flex flex-col gap-y-5 rounded-2xl border border-neutral-750 p-6", className)}
    >
      <div className="relative h-[240px] w-full rounded-t-2xl">
        {game.isNew && <Badge label="New" className="absolute left-3 top-3 z-20" />}
        <Image
          loading="lazy"
          fill
          src={game.image}
          alt={`game-${game.id}-image`}
          className="z-10 rounded-t-2xl"
        />
      </div>
      <div className="flex flex-col gap-y-3">
        <span className="text-base font-bold uppercase leading-4 text-neutral-500">
          {game.genre}
        </span>
        <div className="flex justify-between font-bold text-neutral-850">
          <span>{game.name}</span>
          <span>${game.price}</span>
        </div>
      </div>
      <Button
        onClick={handleClick}
        variant={isSaved ? "primary" : "secondary"}
        className="uppercase"
      >
        {isSaved ? "Remove" : "Add to cart"}
      </Button>
    </div>
  );
}

export { GameCard };
