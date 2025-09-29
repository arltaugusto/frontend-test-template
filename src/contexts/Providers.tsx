"use client";

import React from "react";
import CartContextProvider from "./CartContext";

const Providers = ({ children }: React.PropsWithChildren) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export { Providers };
