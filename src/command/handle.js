class command_handle {
    constructor(client, message) {
        this.client = client;
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

        return this.cmd_run();
    }

    cmd_run() {
        const command = this.client.commands[this.command.name];
        if (!command) return this.error("no command");
        return command.run(this.message, "");
    }
}

module.exports = command_handle;
