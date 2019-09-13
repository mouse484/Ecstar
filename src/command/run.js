const argument = require("../argument");
class CommandRun {
    constructor(client, message, name) {
        const command = client.commands[name];

        if (!command)
            return client.logger.warn(
                `Command that does not exist(${name})`
            );

                    const args = await this.argument.get(message);
        console.log(args);

        command.run(message);
        client.logger.command(`running: ${name}`);
    }
}

module.exports = CommandRun;
