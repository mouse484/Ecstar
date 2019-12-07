import print from '../lib/print';

export default class MessageEvent {
  client: any;
  constructor(client: any) {
    this.client = client;
  }
  handle(message: any) {
    if (message.author.bot) return;
    if (!message.content.startsWith(this.client.options.prefix)) return;

    const commandName = message.content
      .slice(this.client.options.prefix.length)
      .split(' ')
      .shift();

    this.commandRun(commandName, message);
  }
  commandRun(commandName: string, message: any) {
    const command = this.client.commands[commandName];

    if (!command) {
      return print.warn(`Non-existent Command(${commandName})`);
    }
    command.run(message);
    print.command(`Running: ${commandName}`);
  }
}
