const CommandRun = require("../command/run.js");
const EventRun = require("../event/run.js");

class Dispatcher {
    constructor(client) {
        this.client = client;
    }

    event(name, callback) {
        switch (name) {
            case "ready":
                this.client.logger.info(`Go!! ${this.client.user.tag}`);
                break;
            case "message":
                this.messageHandle(callback);
                break;
        }
        return new EventRun(this.client).run(name, callback);
    }

    messageHandle(message) {
        if (!this.messageCheck(message)) return;
        if (!this.commandCheck(message)) return;

        const name = message.content
            .slice(this.client.options.prefix.length)
            .split(" ")
            .shift();

        new CommandRun(this.client, message, name);
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
