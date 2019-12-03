import print from "../lib/print";

export default class MessageEvent {
    client: any;
    constructor(client: any) {
        this.client = client;
    }
    handle(message: any) {
        if (message.author.bot) return;
        if (!message.content.startsWith(this.client.options.prefix)) return;

        const command_name = message.content
            .slice(this.client.options.prefix.length)
            .split(" ")
            .shift();

        this.commandRun(command_name, message);
    }
    commandRun(command_name: string, message: any) {
        const command = this.client.commands[command_name];

        if (!command) {
            return print.warn(`Non-existent Command(${command_name})`);
        }
        command.run(message);
        print.command(`Running: ${command_name}`);
    }
}
