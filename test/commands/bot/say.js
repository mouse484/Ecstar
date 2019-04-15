const { command } = require("../../../src");

module.exports = class extends command {
    constructor(client) {
        super(client, {
            name: "say",
            args: {
                text: "text",
            },
        });
    }
    run(message, { text }) {
        return message.channel.send(text);
    }
};
