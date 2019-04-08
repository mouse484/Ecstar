const command_handle = require("./handle");

class command {
    /**
     * Options for command
     * @typedef {command_options} command_options
     * @property {string} [path=command/] - commands dir path
     */

    constructor(options = {}) {
        if (!options.path) options.path = "commands/";

        this.options = options;
    }

    /**
     * command handling
     * @param {Object} message - Discord message object
     */

    handle(message) {
        command_handle(message, this.options);
    }
}

module.exports = command;
