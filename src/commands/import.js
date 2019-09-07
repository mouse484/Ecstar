const fs = require("fs");
const path = require("path");

class CommandImport {
    constructor(client) {
        const commands = {};

        const directory_path = path.join(process.argv[1], "commands");

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
                    const command_file = require(path.join(
                        command_sub_dir,
                        file
                    ));
                    const command = new command_file(client);

                    if (commands[command.info.name]) {
                        client.logger.error(
                            `Can not create a command with the same name. Duplicate command: "${command.info.name}"`
                        );
                    }

                    client.logger.info(`import:${command_sub_dir}/${file} - ${command.info.name}`);

                });
        });
    }

    isDir(path) {
        return fs.statSync(path).isDirectory();
    }
}

module.exports = CommandImport;
