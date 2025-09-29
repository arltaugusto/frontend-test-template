const { rules } = require("eslint-plugin-react");

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["**/*.test.tsx", "**/*.test.ts"],
      env: {
        jest: true,
      },
    },
  ],
  plugins: ["react", "@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    ...rules.rules,
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": 2,
    "react/react-in-jsx-scope": 0,
  },
};
