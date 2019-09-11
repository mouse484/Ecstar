const CommandRun = require("../commands/run.js");
class Dispatcher {
    constructor(client) {
        this.client = client;
    }

    messageHandle(message) {
        if (!this.messageCheck(message)) return;
        if (!this.commandCheck(message)) return;

        const args = message.content
            .slice(this.client.options.prefix.length)
            .split(" ");
        const command_name = args.shift().toLowerCase();

        new CommandRun(this.client, message, command_name);
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

module.exports = Dispatcher;
