"use client";
import { Button } from "@/components/atoms/Button";
import Image from "next/image";

type GameProps = {
  id: string;
  genre: string;
  image: string;
  name: string;
  price: number;
  isNew: boolean;
};

interface GameCardProps<T extends GameProps> {
  game: T;
}

function GameCard<T extends GameProps>({ game }: GameCardProps<T>) {
  return (
    <div className="flex flex-col gap-y-5 rounded-2xl border border-neutral-750 p-6">
      <div className="relative h-[240px] w-full rounded-t-2xl">
        <Image fill src={game.image} alt={`game-${game.id}-image`} className="rounded-t-2xl" />
      </div>
      <div className="flex flex-col gap-y-3">
        <span className="block text-base font-bold uppercase leading-4 text-neutral-500">
          {game.genre}
        </span>
        <div className="flex justify-between font-bold text-neutral-850">
          <span className="">{game.name}</span>
          <span className="">${game.price}</span>
        </div>
      </div>
      <Button onClick={() => {}} variant="secondary" className="h-14 uppercase">
        Add to cart
      </Button>
    </div>
  );
}

export { GameCard };
