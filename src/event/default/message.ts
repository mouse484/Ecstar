import { Message } from 'discord.js';
import { Client } from '../../../src';

import print from '../../lib/print';

export default class MessageEvent {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }
  handle(callback: Message[]) {
    const [message] = callback;
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
    print.command(`${command.info.name} (${commandName})`);
  }
}
