const fs = require("fs");
const path = require("path");

const isdir = dir_path => {
    fs.statSync(dir_path).isDirectory();
};

module.exports = class command_import {
    constructor(client) {
        const commands = {};

        const command_dir_path = client.options.command;
        if (!command_dir_path) return;
        isdir(command_dir_path);

        const command_dir = fs.readdirSync(command_dir_path);
        command_dir.forEach(dir => {
            const category_dir_path = path.join(command_dir_path, dir);
            isdir(category_dir_path);

            const category_dir = fs.readdirSync(category_dir_path);
            category_dir
                .filter(file => file.endsWith(".js"))
                .forEach(file => {
                    const command_file = require(`${category_dir_path}/${file}`);
                    const command = new command_file(client);

                    if (commands[command.info.namename]) {
                        throw new Error(
                            `Can not create a command with the same name. Duplicate command: "${
                                command.info.name
                            }"`
                        );
                    }
                    commands[command.info.name] = command;
                    client.emit("log", `import:${dir}/${file}`);
                });
        });
        client.commands = commands;
    }
};
