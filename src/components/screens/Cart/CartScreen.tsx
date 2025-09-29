"use client";

import Link from "next/link";
import LeftArrow from "./icons/arrow-left.svg";
import { useCartContext } from "@/contexts/CartContext";
import { GamesInCart } from "./components/GamesInCart";
import { Checkout } from "./components/Checkout";

const CartScreen = () => {
  const { cart } = useCartContext();
  const cartLength = Object.keys(cart).length;
  return (
    <div>
      <div className="2xl:pb-6">
        <Link href="/" className="flex gap-x-2 font-medium">
          <LeftArrow />
          Back to Catalog
        </Link>
      </div>
      <div className="flex flex-col gap-y-3 pt-12">
        <h2 className="text-4xl font-bold">Your Cart</h2>
        <span className="text-2xl leading-7">
          {cartLength} item{cartLength === 1 ? "" : "s"}
        </span>
      </div>
      {!!cartLength && (
        <div className="flex flex-col gap-y-12 2xl:flex-row 2xl:gap-x-20 2xl:gap-y-0">
          <GamesInCart />
          <Checkout />
        </div>
      )}
    </div>
  );
};

export { CartScreen };
