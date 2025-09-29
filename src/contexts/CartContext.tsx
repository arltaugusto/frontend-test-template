import { Game } from "@/utils/endpoint";
import React, { createContext, useContext, useEffect, useState } from "react";

type CartContextType = Record<string, Game>;
interface CartContextProviderType {
  cart: CartContextType;
  addItem: (item: Game) => void;
  removeItem: (item: Game) => void;
}

const CartContext = createContext({} as CartContextProviderType);

const CartContextProvider = ({ children }: React.PropsWithChildren) => {
  const [cart, setCart] = useState<CartContextType>({});

  useEffect(() => {
    const cartLocalStr = localStorage.getItem("cart") || "{}";
    const savedCart = JSON.parse(cartLocalStr) as CartContextType;
    setCart(savedCart);
  }, []);

  const addItem = (item: Game) => {
    const newCart = { ...cart, [item.id]: item };
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeItem = (item: Game) => {
    const newCart = { ...cart };
    delete newCart[item.id];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("must be wrapped in CartContextProvider");
  }

  return context;
};

export default CartContextProvider;
