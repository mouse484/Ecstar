const discord = require("discord.js");

const command_handle = require("./command/handle");

/**
 * Discord.js Client with a command framework
 * @extends {Client}
 */

class Ecstar_client extends discord.Client {
    /**
     * Options for Client
     * @typedef {ClientOptions} Client_options
     * @property {String} [prefix] - command prefix
     * @property {String} [owner] - Bot owner ID
     * @property {Boolean} [log=false] - loging
     */

    constructor(options = {}) {
        if (!options.predix) options.prefix = "!";
        super(options);

        // command handling
        super.on("message", message => command_handle(message));
        // loging
        if (options.log) super.on("log", log => console.log(log));
    }

    /**
     * loging your bot
     * @param {String} token - your bot token
     */

    login(token) {
        super.emit("log", "starting...");
        return super.login(token);
    }
}

module.exports = Ecstar_client;
