const fs = require("fs");
const path = require("path");

const directory = require("../lib/directory.js");

class CommandImport {
    constructor(client) {
        this.client = client;
        this.directory = new directory();
        this.commands = {};

        const directory_path = this.directory.get("commands");

        if (!fs.existsSync(directory_path))
            client.logger.error("'commands' directory is required");

        fs.readdirSync(directory_path).forEach(file_or_dir => {
            const command_sub_dir = path.join(directory_path, file_or_dir);
            if (!this.isDir(command_sub_dir))
                client.logger.error(
                    `Files cannot be placed directly under the 'commands' directory (${file_or_dir})`
                );
            fs.readdirSync(command_sub_dir)
                .filter(file => file.endsWith(".js"))
                .forEach(file => {
                    /* eslint-disable global-require*/
                    const file_path = path.join(command_sub_dir, file);
                    const command_file = require(file_path);
                    const command = new command_file(client);

                    const name = command.info.name;

                    if (this.commands[name]) this.commandErroer(client, name);
                    this.addCommand(file_path, command, name);

                    if (command.info.aliases) {
                        command.info.aliases.forEach(alias => {
                            if (this.commands[alias])
                                this.commandErroer(client, alias);
                            this.addCommand(file_path, command, alias);
                        });
                    }
                });
        });
        client.commands = this.commands;
    }

    isDir(dir_path) {
        return fs.statSync(dir_path).isDirectory();
    }

    addCommand(file_path, command, name) {
        this.commands[name] = command;
        this.client.logger.info(`import: ${file_path} - ${name}`);
    }

    commandErroer(client, name) {
        return client.logger.error(
            `Can not create a command with the same name. Duplicate command: "${name}"`
        );
    }
}

module.exports = CommandImport;
