import { useCartContext } from "@/contexts/CartContext";
import { allGames } from "@/utils/endpoint";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CartGameCard } from "./CartGameCard";

jest.mock("@/contexts/CartContext", () => ({
  useCartContext: jest.fn(),
}));
const mockGame = allGames[0];
describe("CartGameCard", () => {
  it("should call removeItem callback on x button click", async () => {
    const removeItemMock = jest.fn();
    jest.mocked(useCartContext).mockReturnValue({
      cart: {},
      removeItem: removeItemMock,
      addItem: jest.fn(),
    });
    render(<CartGameCard game={mockGame} />);

    const button = screen.getByRole("button");

    await userEvent.click(button);

    expect(removeItemMock).toHaveBeenCalled();
  });

  it("should render is new badge if game is new", async () => {
    const newGameMock = {
      ...mockGame,
      isNew: true,
    };
    jest.mocked(useCartContext).mockReturnValue({
      cart: {},
      removeItem: jest.fn(),
      addItem: jest.fn(),
    });
    render(<CartGameCard game={newGameMock} />);

    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("should not render is new badge if game is not new", async () => {
    const newGameMock = {
      ...mockGame,
      isNew: false,
    };
    jest.mocked(useCartContext).mockReturnValue({
      cart: {},
      removeItem: jest.fn(),
      addItem: jest.fn(),
    });
    render(<CartGameCard game={newGameMock} />);

    expect(screen.queryByText("New")).not.toBeInTheDocument();
  });
});
