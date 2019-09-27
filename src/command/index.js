class Command {
    constructor(client, info) {
        this.info_check(client, info);
        this.client = client;
        this.info = info;
    }

    info_check(client, info) {
        if (!client) client.logger.error("A client must be specified.");
        if (!info.name) client.logger.error("command name must be specified.");
    }
}

module.exports = Command;
