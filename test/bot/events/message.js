const { Event } = require("../../../src");

module.exports = class extends Event {

    constructor (client) {

        super(client, "message");
    }

    run (message) {

        return console.log(message.content);
    }
};
