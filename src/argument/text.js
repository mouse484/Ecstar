const argument = require("../argument");

class text extends argument {
    constructor(client) {
        super(client, "text");
    }
    parse(value) {
        return value;
    }
}
