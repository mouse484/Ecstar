import { Command, Client } from '../../../../src';
import { Message } from 'discord.js';

export = class extends Command {
  constructor(client: Client) {
    super(client, { name: 'test', description: 'test command' });
  }

  run(message: Message) {
    return message.channel.send('test');
  }
};
