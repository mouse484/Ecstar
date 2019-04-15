const { command } = require("../../../src");

module.exports = class extends command {
    constructor(client) {
        super(client, {
            name: "say",
            args: {
                tx: "text",
            },
        });
    }
    run(message, { tx }) {
        return message.channel.send(tx);
    }
};
