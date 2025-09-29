import { getGamesByPageAndGenre } from "@/services/game";
import { type Game, allGames } from "@/utils/endpoint";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { GamesGrid } from "./GamesGrid";

const someGames = allGames.slice(0, 5);
jest.mock("@/components/molecules/GameCard", () => ({
  GameCard: ({ game }: { game: Game }) => <div>{game.name}</div>,
}));

jest.mock("@/services/game", () => ({
  getGamesByPageAndGenre: jest.fn(),
}));

describe("GamesGrid", () => {
  it("should render see more button if currentPage is less than totalPages", () => {
    render(<GamesGrid games={someGames} initialTotalPages={5} initialCurrentPage={1} />);

    expect(screen.getByRole("button", { name: "see more" })).toBeInTheDocument();
  });

  it("should not render see more button if currentPage is equal to totalPages", () => {
    render(<GamesGrid games={someGames} initialTotalPages={1} initialCurrentPage={1} />);

    expect(screen.queryByRole("button", { name: "see more" })).not.toBeInTheDocument();
  });

  it("should append games resut from server action on see more button click", async () => {
    const gamesResponse = allGames.slice(6, 10);
    const expectedTotalFinalGames = 9;
    jest
      .mocked(getGamesByPageAndGenre)
      .mockResolvedValue({ games: gamesResponse, currentPage: 2, totalPages: 2 });
    render(<GamesGrid games={someGames} initialTotalPages={5} initialCurrentPage={1} />);

    const seeMoreButton = screen.getByRole("button", { name: "see more" });
    const gamesGrid = screen.getByRole("grid");

    await userEvent.click(seeMoreButton);

    expect(gamesGrid.childNodes.length).toBe(expectedTotalFinalGames);
  });
});
