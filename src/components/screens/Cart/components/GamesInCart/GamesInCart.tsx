"use client";

import { CartGameCard } from "@/components/molecules/CartGameCard";
import { useCartContext } from "@/contexts/CartContext";

const GamesInCart = () => {
  const { cart } = useCartContext();

  return (
    <div className="mt-8 2xl:mt-12 2xl:max-w-[65%]">
      {Object.values(cart).map((game) => (
        <CartGameCard key={`${game.id}-cart-item`} game={game} />
      ))}
    </div>
  );
};

export { GamesInCart };
