const path = require("path");

class Directory {
    get(name) {
        this.path = process.argv[1];
        if (this.path.endsWith(".js")) {
            const file_name = this.path.split("/").slice(-1)[0];
            const directory = this.path.split(file_name)[0];

            this.path = directory;
        }
        console.log(this.path);
        return path.join(this.path, name);
    }
}

module.exports = Directory;
