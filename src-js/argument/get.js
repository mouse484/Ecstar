class ArgumentGet {

    constructor (client) {

        this.client = client;
    }

    get (message, info) {

        const argument = {};

        const content = message.content
            .slice(this.client.options.prefix.length + info.name.length)
            .trim();

        Object.keys(info.args).forEach((name) => {

            const args = this.client.arguments[info.args[name]];

            if (args) argument[name] = args.parse(content);
        });
        return argument;
    }
}

module.exports = ArgumentGet;
