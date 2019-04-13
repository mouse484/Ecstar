const fs = require("fs");

const ignore = ["index.js", "import.js"];

class arugument_import {
    constructor(client) {
        const args = {};

        const dir = fs.readdirSync(__dirname);
        dir.filter(file => !ignore.includes(file)).forEach(file => {
            const arugment_file = require(`./${file}`);
            const argumrnt = new arugment_file(client);

            args[argumrnt.type] = argumrnt;
        });

        client.arguments = args;
    }
}

module.exports = arugument_import;
