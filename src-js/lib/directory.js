const fs = require("fs");
const path = require("path");

class Directory {
    constructor(client) {
        this.client = client;
    }

    get(name) {
        this.path = process.argv[1];
        if (this.path.endsWith(".js")) {
            const slice_last = -1;
            const file_name = this.path.split("/").slice(slice_last)[0];
            const directory = this.path.split(file_name)[0];

            this.path = directory;
        }
        this.check(this.path, name);
        return path.join(this.path, name);
    }

    check(directory_path, name) {
        if (!fs.existsSync(directory_path))
            this.client.logger.error(`'${name}' directory is required`);
    }
}

module.exports = Directory;
