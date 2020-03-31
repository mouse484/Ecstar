import { Command, Client } from '../../../../src';
import { Message } from 'discord.js';

export = class extends Command {
  constructor(client: Client) {
    super(client, { name: 'alias', aliases: ['エイリアス'] });
  }

  run(message: Message) {
    return message.channel.send('ok!');
  }
};
