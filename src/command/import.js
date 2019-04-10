const require_all = require("require-all");

const discord = require("discord.js");

module.exports = class import_command extends discord.Client {
    constructor(client) {
        const files = require_all(client.options.command);
        const commands = {};
        Object.keys(files).forEach(dir => {
            const directory = files[dir];
            Object.keys(directory).forEach(file => {
                const command = new directory[file](client);
                commands[command.info.name] = command;
                client.emit("log", `import:${dir}/${file}`);
            });
        });

        client.commands = commands;
        super(client);
    }
};
