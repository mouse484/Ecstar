class dispatcher {
    constructor(client) {
        this.client = client;
    }

    messageHandle(message) {
        if (!this.messageCheck(message)) return;
        if (!this.commandCheck(message)) return;

        this.client.logger.trace(`[Command] : ${message.content}`);
        message.channel.send(`[Command] : ${message.content}`);
    }

    messageCheck(message) {
        if (message.author.bot) return false;
        return true;
    }

    commandCheck(message) {
        if (message.content.startsWith(this.client.options.prefix)) return true;
        return false;
    }
}

module.exports = dispatcher;
