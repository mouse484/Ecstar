const fs = require("fs");
const path = require("path")

class CommandImport {
    constructor(client) {
        const directory = path.join(process.argv[1], "commands");

        if (!fs.existsSync(directory))
            client.logger.error("'commands' directory is required");

    }

    isDir(path) {
        return fs.statSync(path).isDirectory();
    }
}

module.exports = CommandImport;
