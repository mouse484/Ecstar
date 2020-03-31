import { Client, Event } from '../../index';
import { Message } from 'discord.js';

import { commandRun } from '../../command/run';

export = class extends Event {
  constructor(client: Client) {
    super(client, 'message');
  }
  run(callback: Message[]) {
    const [message] = callback;
    if (message.author.bot) return;
    if (!message.content.startsWith(this.client.options.prefix)) return;

    const commandName: string = String(
      message.content
        .slice(this.client.options.prefix.length)
        .split(' ')
        .shift()
    );

    commandRun(this.client, commandName, message);
  }
};
