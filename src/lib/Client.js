const Discord = require("discord.js");

const logger = require("log4js").getLogger();
logger.level = "debug";

class EcstarClient extends Discord.Client {
    constructor(options = {}) {
        super(options);

        this.logger = logger;

        // Ready Ecstar
        super.once("ready", () => {
            this.logger.info(`Go!! ${this.user.tag}`);
        });
    }

    login(token) {
        this.logger.info("Ready...");
        return super.login(token);
    }
}

module.exports = EcstarClient;
