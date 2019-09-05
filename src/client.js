const Discord = require("discord.js");

const logger = require("./lib/logger.js");

const dispatcher = require("./lib/dispatcher.js");

class EcstarClient extends Discord.Client {
    constructor(options = {}) {
        super(options);

        this.logger = new logger();

        this.dispatcher = new dispatcher(this);

        /* Ready Ecstar */
        super.once("ready", () => {
            this.logger.info(`Go!! ${this.user.tag}`);
        });

        /* message events */
        super.on("message", message => this.dispatcher.messageHandle(message));
    }

    login(token) {
        this.logger.info("Ready...");
        return super.login(token);
    }
}

module.exports = EcstarClient;
