"use strict";

module.exports = {
    extends: ["esc", "prettier"],
    plugins: ["@typescript-eslint", "prettier"],
    parser: "@typescript-eslint/parser",
    rules: {
        "prettier/prettier": ["error", require("./.prettierrc.js")],
    }
};
