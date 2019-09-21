const Discord = require("discord.js");

const Logger = require("./lib/logger.js");

const CommandImport = require("./command/import.js");
const ArgumenrImport = require("./argument/import.js");
const EventImport = require("./event/import.js");

const Dispatcher = require("./lib/dispatcher.js");

class EcstarClient extends Discord.Client {
    constructor(options = {}) {
        super(options);

        this.logger = new Logger();

        this.dispatcher = new Dispatcher(this);

        /* Ready Ecstar */
        super.once("ready", () => {
            new CommandImport(this);
            new ArgumenrImport(this);
            new EventImport(this);
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
