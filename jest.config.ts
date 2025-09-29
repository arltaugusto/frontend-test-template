import type { Config } from "@jest/types";
import nextJest from "next/jest.js";

export const customJestConfig: Config.InitialOptions = {
  coverageProvider: "v8",
  clearMocks: true,
  setupFilesAfterEnv: ["<rootDir>/setupJest.ts"], // Adjust path if needed
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
};

const createJestConfig = nextJest({
  dir: "./",
});

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)();
  return {
    ...nextJestConfig,
    moduleNameMapper: {
      "\\.svg$": "<rootDir>/__mocks__/svg.tsx",
      "^@/(.*)$": "<rootDir>/src/$1",
      ...nextJestConfig.moduleNameMapper,
    },
  };
};
export default jestConfig;
