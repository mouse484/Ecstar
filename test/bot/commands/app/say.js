const { Command } = require("../../../../src");

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: "say",
            args: { value: "text" },
        });
    }
    run(message, { text }) {
        return message.channel.send(text);
    }
};