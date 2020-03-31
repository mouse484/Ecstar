import { Command, Client } from '../../../../src';
import { Message } from 'discord.js';

export = class extends Command {
  constructor(client: Client) {
    super(client, {
      name: 'owner',
      ownerOnly: true,
      description: 'Owner only command',
    });
  }

  run(message: Message) {
    return message.channel.send('ok!');
  }
};
