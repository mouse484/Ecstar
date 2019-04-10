class command {
    constructor(client, message) {
        if (message.author.bot) return;
        if (!message.content.startsWith(client.options.prefix)) return;
        message.channel.send(message.content);
    }
}

module.exports = command;
