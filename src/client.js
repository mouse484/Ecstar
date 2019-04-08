const discord = require("discord.js");

/**
 * Discord.js Client with a command framework
 * @extends {Client}
 */

class Ecstar_client extends discord.Client {

    /**
    * Options for Client
    * @typedef {ClientOptions} Client_options
    * @property {string} [prefix] - command prefix
    * @property {string} [owner] - Bot owner ID
    * @property {bool} [log=false] - loging
    */

    constructor(options = {}) {
        if (!options.predix) options.commandPrefix = "!";
        super(options);
        // loging
        if (options.log) super.on("log", log => console.log(log));
    }
    login(token) {
        super.emit("log", "starting...");
        return super.login(token);
    }
}

module.exports = Ecstar_client;
