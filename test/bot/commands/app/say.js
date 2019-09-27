const { Command } = require("../../../../src");

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: "say",
            args: { value: "text" },
        });
    }

    run(message, { value }) {
        return message.channel.send(value);
    }
};
