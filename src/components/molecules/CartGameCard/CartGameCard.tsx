import { Badge } from "@/components/atoms/Badge";
import { useCartContext } from "@/contexts/CartContext";
import { Game } from "@/utils/endpoint";
import Image from "next/image";

import X from "./icons/x.svg";

interface CartGameCardProps {
  game: Game;
}
const CartGameCard = ({ game }: CartGameCardProps) => {
  const { removeItem } = useCartContext();
  const handleRemove = (item: Game) => () => {
    removeItem(item);
  };

  return (
    <div className="flex w-full border-b border-b-neutral-750 px-4 py-5 last:border-b-0 2xl:gap-x-6">
      <div className="flex  w-full flex-col gap-y-4 2xl:flex-row 2xl:gap-x-6">
        <div className="relative h-[136px] w-[259px] 2xl:h-[156px] 2xl:w-[200px]">
          {game.isNew && <Badge label="New" className="absolute z-20 top-3 left-3" />}
          <Image loading="lazy" src={game.image} fill alt={game.name + "-image"} />
        </div>
        <div className="flex grow flex-col gap-y-3">
          <span className="text-base font-bold uppercase leading-4 z-10 text-neutral-500">
            {game.genre}
          </span>
          <div className="flex flex-grow flex-col gap-y-2">
            <span className="text-xl font-bold leading-5 text-neutral-850">{game.name}</span>
            <p className="max-w-80 text-base leading-5 text-neutral-500">{game.description}</p>
          </div>
          <div className="mt-14 text-end text-xl font-bold leading-6 2xl:mt-0">${game.price}</div>
        </div>
      </div>
      <button className="h-fit w-fit" onClick={handleRemove(game)}>
        <X />
      </button>
    </div>
  );
};

export { CartGameCard };
