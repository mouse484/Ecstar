class ArgumentGet {
    constructor(client) {
        this.client = client;
    }

    get(message, value) {
        const argument = {};

        Object.keys(value).forEach(name => {
            const args = this.client.arguments[value[name]];

            console.log(this.client.arguments["text"]);

            if (args) {
                argument[name] = args.parse(message);
            }
        });
        return argument;
    }

}

module.exports = ArgumentGet;