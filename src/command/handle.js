class command_handle {
    constructor(client, message) {
        const { prefix } = client.options;

        if (message.author.bot) return;

        this.command = {};

        if (message.content.startsWith(prefix)) {
            this.command.name = message.content
                .slice(prefix.length)
                .trim()
                .split(/ +/g)[0];
            this.command.value = message.content
                .slice(prefix.length + this.command.name.length)
                .trim();

            console.log(this.command.name, this.command.value);
        } else if (message.channel.type === "dm") {
            this.command.name = message.content.split(" ")[0];
            this.command.value = message.content
                .slice(this.command.name.length)
                .trim();
        } else return;

        message.command = this.command;
        const command = client.commands[message.command.name];

        if (!command) return;

        if (command.info.args) {
            const args = {};
            Object.keys(command.info.args).forEach(ar => {
                console.log(ar);
                args[ar] = client.args[command.info.args[ar]].parse(
                    message.command.value
                );
            });
            return command.run(message, args);
        }
        return command.run(message);
    }
}

module.exports = command_handle;
