const error = require("../errors/command.js");
// const argument = require("../argument");

class command_run {
    constructor(client, message, command) {
        this.client = client;
        this.command = this.client.commands[command.name];

        if (!this.command) return new error("no command");

        if (this.command.info.args) {
            const args = {};
            Object.keys(this.command.info.args).forEach(ar => {
                console.log(ar);
                args[ar] = client.args[this.command.info.args[ar]].parse(
                    command.value
                );
            });
            return this.command.run(message, args);
        }

        return this.command.run(this.message, "");
    }
}

module.exports = command_run;
