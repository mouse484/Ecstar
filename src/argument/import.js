const fs = require("fs");

const ignore = ["index.js", "import.js"];

class argument_import {
    constructor(client) {
        const args = {};

        const dir = fs.readdirSync(__dirname);
        dir.filter(file => !ignore.includes(file)).forEach(file => {
            const argument_file = require(`./${file}`);
            const arugmrnt = new argument_file(client);

            args[arugmrnt.type] = argumrnt;
        });

        client.args = args;
    }
}

module.exports = argument_import;
