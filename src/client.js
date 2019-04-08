const discord = require("discord.js");

/**
 * Discord.js Client with a command framework
 * @extends {Client}
 */

class Ecstar_client extends discord.Client {

    /**
	 * Options for Client
	 * @typedef {ClientOptions} Client_options
	 * @property {string} [commandPrefix=!] - Default command prefix
	 * @property {string|string[]|Set<string>} [owner] - ID of the bot owner's Discord user, or multiple IDs
	 */

    constructor(options = {}) {
        if (!options.predix) options.commandPrefix = "!";
        super(options);
        console.log(options);
    };
};

module.exports = Ecstar_client;
