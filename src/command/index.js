const logger = new (require("../lib/logger.js"))();
class Command {
    constructor(client, info) {
        this.info_check(client, info);
        this.client = client;
        this.info = info;
    }

    info_check(client, info) {
        if (!client) logger.error("A client must be specified.");
        if (!info.name) logger.error("command name must be specified.");
    }
}

module.exports = Command;
