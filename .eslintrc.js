module.exports = {
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  plugins: ["react"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
};
