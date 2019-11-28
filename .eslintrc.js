module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        "esc",
        "plugin:@typescript-eslint/eslint-recommended",
        "prettier",
    ],
    plugins: ["prettier"],
    overrides: [
        {
            files: ["*.ts"],
            extends: ["prettier/@typescript-eslint"],
            plugins: ["@typescript-eslint"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: 2018,
                sourceType: "module",
                project: "./tsconfig.json",
            },
        },
    ],
    rules: {
        "prettier/prettier": ["error", require("./.prettierrc.js")],
    },
};
