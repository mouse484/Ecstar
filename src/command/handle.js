class command_handle {
    constructor(client, message) {
        const prefix = client.options.prefix;
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).split(" ");

        const command = client.commands[args[0]];
        if (command) command.run(message);
    }
}

module.exports = command_handle;
