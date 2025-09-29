import { useCartContext } from "@/contexts/CartContext";
import { allGames } from "@/utils/endpoint";
import { render, screen } from "@testing-library/react";

import { CartScreen } from ".";

const mockGame = allGames[0];
jest.mock("@/contexts/CartContext", () => ({
  useCartContext: jest.fn(),
}));

jest.mock("./components/GamesInCart", () => ({
  GamesInCart: () => <div>GamesInCart</div>,
}));

jest.mock("./components/Checkout", () => ({
  Checkout: () => <div>Checkout</div>,
}));

describe("CartScreen", () => {
  it("should render checkout and cart if there are items in cart", () => {
    jest.mocked(useCartContext).mockReturnValue({
      cart: { [mockGame.id]: mockGame },
      addItem: jest.fn(),
      removeItem: jest.fn(),
    });

    render(<CartScreen />);

    expect(screen.getByText("GamesInCart")).toBeInTheDocument();
    expect(screen.getByText("Checkout")).toBeInTheDocument();
    expect(screen.getByText("1 item")).toBeInTheDocument();
  });

  it("should not render checkout and cart if cart is empty", () => {
    jest.mocked(useCartContext).mockReturnValue({
      cart: {},
      addItem: jest.fn(),
      removeItem: jest.fn(),
    });

    render(<CartScreen />);
    expect(screen.queryByText("GamesInCart")).not.toBeInTheDocument();
    expect(screen.queryByText("Checkout")).not.toBeInTheDocument();
    expect(screen.getByText("0 items")).toBeInTheDocument();
  });
});
