const arugment = require("../argument");

class command_handle {
    constructor(client, message) {
        const prefix = client.options.prefix;
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;

        const name = message.content.slice(prefix.length).split(" ")[0];
        const command = client.commands[name];

        if (command.info.args) {
            const args = client.args[command.info.args].parse(message.content);
            if (command && args) command.run(message, args);
        }

        if (command) command.run(message);
    }
}

module.exports = command_handle;
