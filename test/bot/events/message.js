const { Event } = require("../../../../src");

module.exports = class extends Event {
    constructor(client) {
        super(client, {
            name: "message",
        });
    }
    on(message) {
        return console.log(message);
    }
};