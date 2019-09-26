const fs = require("fs");
const path = require("path");

class EventImport {
    constructor(client) {
        this.events = {};

        const directory_path = path.join(process.argv[1], "events");

        if (!fs.existsSync(directory_path))
            client.logger.error("'event' directory is required");

        fs.readdirSync(directory_path)
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                const file_path = path.join(directory_path, file);

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
