const fs = require("fs");

const ignore = ["index.js", "import.js"];

class arugument_import {
    constructor(client) {
        const dir = fs.readdirSync(__dirname);
        dir.filter(file => !ignore.includes(file)).forEach(file => {
            console.log(file);
        });
    }
}

module.exports = arugument_import;
