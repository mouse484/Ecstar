const run = require("./run.js");

class command_type {
    constructor(client, message) {
        this.client = client;
        this.message = message;
        this.prefix = client.options.prefix;

        this.command = {};

        if (this.message.content.startsWith(this.prefix)) {
            this.command.name = this.message.content
                .slice(this.prefix.length)
                .split(" ")[0];
            this.command.value = message.content
                .slice(this.prefix.length + this.command.name.length)
                .trim();

            new run(this.client, this.message, this.command);
        }
    }
}

module.exports = command_type;
