class CommandRun {
    constructor(client, message, command_name) {
        const command = client.commands[command_name];

        if (!command)
            return client.logger.warn(
                `Command that does not exist(${command_name})`
            );

        command.run(message);
    }
}

module.exports = CommandRun;
