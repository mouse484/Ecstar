class ArgumentGet {
    constructor(client) {
        this.client = client;
    }

    get(message, value) {
        const argument = {};

        Object.keys(value).forEach(name => {
            const args = this.client.arguments[value[name]];

            if (args) {
                argument[name] = args.parse(message);
            }
        });
        console.log(argument)
        return argument;
    }

}

module.exports = ArgumentGet;