const command_type = require("./type.js");
const error = require("../errors/command.js");

class command_handle {
    constructor(client, message) {
        this.client = client;
        this.message = message;
        this.prefix = client.options.prefix;

        if (this.message.author.bot) return new error("bot");

        new command_type(client, message);
    }
}

module.exports = command_handle;
