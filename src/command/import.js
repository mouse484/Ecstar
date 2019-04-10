const require_all = require("require-all");

const command = require("./create");

module.exports = class extends command {
    constructor(client) {
        const files = require_all(client.options.command);
        client.commands = files;
        super(client);
    }
}
