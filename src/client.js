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
    */

    constructor(options = {}) {
        if (!options.predix) options.commandPrefix = "!";
        super(options);
    }
}

module.exports = Ecstar_client;
