import Link from "next/link";

import CartIcon from "./icon/Cart.svg";

const Header = () => {
  return (
    <header className="flex justify-between bg-neutral-550 px-6 py-5 2xl:px-32">
      <Link href="/" className="bold text-2xl leading-6 text-neutral-650">
        GamerShop
      </Link>
      <Link href="/cart">
        <CartIcon />
      </Link>
    </header>
  );
};

export { Header };
