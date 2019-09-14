class Argument {
    constructor(client, type) {
        if (!client) client.logger.error("A client must be specified.");
        this.client = client;
        this.type = type;
    }
}

module.exports = Argument;
