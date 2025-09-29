import { useCartContext } from "@/contexts/CartContext";
import { allGames } from "@/utils/endpoint";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { GameCard } from "./GameCard";

jest.mock("@/contexts/CartContext", () => ({
  useCartContext: jest.fn(),
}));

const mockGame = allGames[0];
describe("GameCard", () => {
  it("should render new badge if game is new", () => {
    jest.mocked(useCartContext).mockReturnValue({
      cart: {},
      addItem: jest.fn(),
      removeItem: jest.fn(),
    });
    const newGameMock = {
      ...mockGame,
      isNew: true,
    };
    render(<GameCard game={newGameMock} />);

    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("should not render new badge if game is not new", () => {
    jest.mocked(useCartContext).mockReturnValue({
      cart: {},
      addItem: jest.fn(),
      removeItem: jest.fn(),
    });
    const newGameMock = {
      ...mockGame,
      isNew: false,
    };
    render(<GameCard game={newGameMock} />);

    expect(screen.queryByText("New")).not.toBeInTheDocument();
  });

  it("should render Add to cart label if game is not in the cart", () => {
    jest.mocked(useCartContext).mockReturnValue({
      cart: {},
      addItem: jest.fn(),
      removeItem: jest.fn(),
    });
    const newGameMock = {
      ...mockGame,
      isNew: false,
    };
    render(<GameCard game={newGameMock} />);

    const addButton = screen.getByRole("button", { name: "Add to cart" });
    const removeButton = screen.queryByRole("button", { name: "Remove" });
    expect(addButton).toBeInTheDocument();
    expect(removeButton).not.toBeInTheDocument();
  });

  it("should render Remove label if game is not in the cart", () => {
    jest.mocked(useCartContext).mockReturnValue({
      cart: { [mockGame.id]: mockGame },
      addItem: jest.fn(),
      removeItem: jest.fn(),
    });
    const newGameMock = {
      ...mockGame,
      isNew: false,
    };
    render(<GameCard game={newGameMock} />);

    const addButton = screen.queryByRole("button", { name: "Add to cart" });
    const removeButton = screen.getByRole("button", { name: "Remove" });
    expect(addButton).not.toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
  });

  it("should call addItem callback if game is not saved", async () => {
    const addItemMock = jest.fn();
    const removeItemMock = jest.fn();
    jest.mocked(useCartContext).mockReturnValue({
      cart: {},
      addItem: addItemMock,
      removeItem: removeItemMock,
    });
    const newGameMock = {
      ...mockGame,
      isNew: false,
    };
    render(<GameCard game={newGameMock} />);

    const addButton = screen.getByRole("button", { name: "Add to cart" });
    await userEvent.click(addButton);

    expect(addItemMock).toHaveBeenCalled();
    expect(removeItemMock).not.toHaveBeenCalled();
  });

  it("should call removeItem callback if game is saved", async () => {
    const addItemMock = jest.fn();
    const removeItemMock = jest.fn();
    jest.mocked(useCartContext).mockReturnValue({
      cart: { [mockGame.id]: mockGame },
      addItem: addItemMock,
      removeItem: removeItemMock,
    });
    const newGameMock = {
      ...mockGame,
      isNew: false,
    };
    render(<GameCard game={newGameMock} />);

    const addButton = screen.getByRole("button", { name: "Remove" });
    await userEvent.click(addButton);

    expect(addItemMock).not.toHaveBeenCalled();
    expect(removeItemMock).toHaveBeenCalled();
  });
});
