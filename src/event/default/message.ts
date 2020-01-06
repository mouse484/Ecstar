import { Client, Message } from '../../../src';

import print from '../../lib/print';

import { commandRun } from '../../command/run';

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

    commandRun(this.client, commandName, message);
  }
}
