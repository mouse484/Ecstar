"use strict";

module.exports = {
    extends: ["esc", "prettier"],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": ["error", require("./.prettierrc.js")],
    }
};
