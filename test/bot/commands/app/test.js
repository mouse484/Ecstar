const { Command } = require("../../../../src");

module.exports = class extends Command {
    constructor(client, info) {
        super(client, {
            name: "test",
        });
    }
    run(message){
        return message.channel.send("test");
    }
};