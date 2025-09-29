import { allGames } from "@/utils/endpoint";
import { getGamesByPageAndGenre } from "./game";

describe("game service", () => {
  it("should filter by genre if it is sent", async () => {
    const expectedResult = allGames.filter((game) => game.genre === "RPG");
    const result = await getGamesByPageAndGenre(1, "RPG");

    expect(result).toStrictEqual({
      games: expectedResult,
      totalPages: 1,
      currentPage: 1,
    });
  });

  it("should retrieve all results if genre is not present", async () => {
    const expectedResult = allGames.slice(0, 12);
    const result = await getGamesByPageAndGenre(1, null);

    expect(result).toStrictEqual({
      games: expectedResult,
      totalPages: 3,
      currentPage: 1,
    });
  });

  it("should retrieve second batch if page is 2", async () => {
    const expectedResult = allGames.slice(12, 24);
    const result = await getGamesByPageAndGenre(2, null);

    expect(result).toStrictEqual({
      games: expectedResult,
      totalPages: 3,
      currentPage: 2,
    });
  });
});
