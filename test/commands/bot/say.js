const { command } = require("../../../src");

module.exports = class extends command {
    constructor(client) {
        super(client, {
            name: "say",
            // args: {
            //     text: this.client.args.text,
            // },
        });
    }
    run(message) {
        const ping = this.client.ping;

        return message.channel.send(`${ping}ms`);
    }
};
