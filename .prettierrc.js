module.exports = {
  semi: true,
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@internal/(.*)$",
    "^[./].*(?<!\\.(c|le|sc)ss)$",
    "^[.]/[-a-zA-Z0-9_]+[.](module)[.](css|scss|less)$",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  trailingComma: "all",
  printWidth: 100,
  tabWidth: 2,
  plugins: ["prettier-plugin-tailwindcss", "@trivago/prettier-plugin-sort-imports"],
};
