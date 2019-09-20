const { Command } = require("../../../../src");

module.exports = class extends Command {
    constructor(client, info) {
        super(client, {
            name: "test",
            aliases: ["テスト"],
        });
    }
    run(message) {
        return message.channel.send("test");
    }
};