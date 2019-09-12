class CommandRun {
    constructor(client, message, info) {
        const command = client.commands[info.name];

        if (!command)
            return client.logger.warn(
                `Command that does not exist(${info.name})`
            );

        command.run(message);
        client.logger.command(`running: ${info.name}`);
    }
}

module.exports = CommandRun;
