const { Command } = require("../../../../src");

module.exports = class extends Command {
    constructor(client, info) {
        super(client, {
            name: "test",
        });
    }
};