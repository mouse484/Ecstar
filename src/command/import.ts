import * as fs from "fs";
import * as path from "path";

import directory from "../lib/directory";
import print from "../lib/print";

export default class ImportCommand {
    commands: Array<any>;
    constructor(client) {
        this.commands = [];
        const directory_path = directory.get("commands");

        try {
            fs.mkdirSync(directory_path);
        } catch {
            print.info("Loading command...");
        }
        fs.readdirSync(directory_path).forEach(that_path => {
            const sub_directory_path = path.join(directory_path, that_path);
            if (!directory.is(sub_directory_path)) {
                return print.warn(
                    `Files cannot be placed directly under the 'commands' directory (${that_path})`
                );
            }
            fs.readdirSync(sub_directory_path)
                .filter(file_name => file_name.match(/\.(?<ext>js|ts)$/u))
                .forEach(async file_name => {
                    const file_path = path.join(sub_directory_path, file_name);

                    const CommandFile = await import(file_path);

                    const command = new CommandFile.default(client);

                    command.info.aliases.push(command.info.name);
                    if (command.info.aliases) {
                        command.info.aliases.forEach(alias => {
                            if (this.commands[alias])
                                this.commandError(command.info.aliases);
                            this.commands[alias] = command;
                            print.info(`import: ${file_path} - ${alias}`);
                        });
                    }
                });
        });
    }
    commandError(name) {
        print.error(
            `Can not create a command with the same name. Duplicate command: "${name}"`
        );
    }
}
