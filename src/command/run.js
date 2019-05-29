const error = require("../errors/command.js");

class command_run {
    constructor(client, message, command_data) {
        this.client = client;
        const command = this.client.commands[command_data.name];

        if (!command) return new error("no command");

        if (command.info.args) {
            this.args = {};
            Object.keys(command.info.args).forEach(args_name => {
                const args_type = command.info.args[args_name];
                const argument = client.args[args_type];
                if (argument) {
                    this.args[args_name] = argument.parse(command_data.value);
                }
            });
            return this.command.run(message, this.args);
        }
        return this.command.run(this.message, "");
    }
}

module.exports = command_run;
