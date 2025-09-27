import CartIcon from "./icon/Cart.svg";

const Header = () => {
  return (
    <header className="flex justify-between bg-neutral-550 px-6 py-5 2xl:px-32">
      <span className="bold text-2xl leading-6 text-neutral-650">GamerShop</span>
      <CartIcon />
    </header>
  );
};

export { Header };
