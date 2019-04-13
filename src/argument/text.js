const argument = require("../argument");

module.exports = class text extends argument {
    constructor(client) {
        super(client, "text");
    }
    parse(value) {
        return value;
    }
};
