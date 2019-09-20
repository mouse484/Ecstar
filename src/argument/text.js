const Argument = require("./index");
module.exports = class extends Argument {
    constructor(client) {
        super(client, "text");
    }

    parse(message) {
        this.message = message;
        return message;
    }
};
