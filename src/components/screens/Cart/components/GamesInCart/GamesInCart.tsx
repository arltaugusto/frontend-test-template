"use client";

import { CartGameCard } from "@/components/molecules/CartGameCard";
import { useCartContext } from "@/contexts/CartContext";

const GamesInCart = () => {
  const { cart } = useCartContext();

  return (
    <div className="2xl:mt-12">
      {Object.values(cart).map((game) => (
        <CartGameCard game={game} />
      ))}
    </div>
  );
};

export { GamesInCart };
