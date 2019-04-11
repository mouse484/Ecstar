const discord = require("discord.js");

const command_import = require("./command/import.js");
const command_handle = require("./command/handle.js");

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
        if (!options.prefix) options.prefix = "!";
        if (!options.command) options.command = "/commands";
        super(options);

        // ready
        super.once("ready", () => {
            new command_import(this);
            super.emit("log", `go! ${this.user.tag}`);
        });
        // command handling
        super.on("message", message => new command_handle(this, message));

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

    /**
     * Discord event listener
     * @param {String} event - Discord client event
     * @callback parameter - Discord client event parameter
     * @returns {object} - Discord client events
     */
    on(event, parameter) {
        super.on(event, parameter);
    }
}

module.exports = Ecstar_client;
