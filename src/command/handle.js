class command_handle {
    constructor(client, message) {
        this.message = message;
        this.prefix = client.options.prefix;
        this.command = {};

        if (this.message.author.bot) return this.error("bot");

        if (this.message.content.startsWith(this.prefix)) this.prefixcmd();
    }

    error(reason) {
        this.status = { status: "error", reason };
        return this.status;
    }

    prefixcmd() {
        this.command.name = this.message.content
            .slice(this.prefix.length)
            .split(" ")[0];
        return this.command;
    }
}

module.exports = command_handle;
