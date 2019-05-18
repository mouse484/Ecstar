const error = require("../errors/command.js");

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

            this.cmd_run();
        }
    }

    cmd_run() {
        const command = this.client.commands[this.command.name];
        if (!command) return new error("no command");
        return command.run(this.message, "");
    }
}

module.exports = command_type;
