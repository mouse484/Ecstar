const fs = require("fs");

const ignore = ["index.js", "import.js", "get.js"];

class ArgumentImport {
    constructor(client) {
        const args = {};

        fs.readdir(__dirname, (err, dir) => {
            if (err) client.logger.error(err);
            dir.filter(file => !ignore.includes(file)).forEach(file => {
                /* eslint-disable global-require */
                const argument_file = require(`./${file}`);
                const argument = new argument_file(client);
                args[argument.type] = argument;
            });
            client.arguments = args;
            client.logger.info("Success import arguments");
        });
    }
}

module.exports = ArgumentImport;
