const Argument = require("../argument/get.js");

class CommandRun {
    constructor(client, message, name) {
        this.argument = new Argument(client);

        const command = client.commands[name];

        if (!command)
            return client.logger.warn(`Command that does not exist(${name})`);

        if (command.info.args) {
            const args = this.argument.get( message, command.info.args);

            command.run(message, args);
            client.logger.command(`running: ${name}`);
        }

        command.run(message);
        client.logger.command(`running: ${name}`);
    }
}

module.exports = CommandRun;
