const fs = require("fs");
const path = require("path");

const directory = require("../lib/directory.js");

class EventImport {
    constructor(client) {
        this.events = {};
        this.directory = new directory(client);

        const directory_path = this.directory.get("commands");

        fs.readdirSync(directory_path)
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                const file_path = path.join(directory_path, file);

                /* eslint-disable global-require */
                const inport_file = require(file_path);

                const event = new inport_file(client);

                if (!this.events[event.name]) {
                    this.events[event.name] = event;
                    client.logger.info(`import event: ${event.name}`);
                }
            });
        client.events = this.events;
    }
}

module.exports = EventImport;
