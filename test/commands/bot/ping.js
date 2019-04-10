const { command } = require("../../../src");

module.exports = class extends command {
    constructor(client) {
        super(client, {
            name: "ping",
        });
    }
    run(message) {
        return message.channel.send(`${ping}ms`);
    }
};
