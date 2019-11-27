"use strict";

module.exports = {
    extends: ["esc", "prettier/@typescript-eslint"],
    plugins: ["@typescript-eslint", "prettier"],
    rules: {
        "prettier/prettier": ["error", require("./.prettierrc.js")],
    },
    overrides: [
        {
            files: ["*.ts"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                "sourceType": "module",
                "project": "./tsconfig.json"
            },
        }
    ]
};
