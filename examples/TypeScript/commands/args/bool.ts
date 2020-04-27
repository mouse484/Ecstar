import { Command, Client } from '../../../../src';
import { Message } from 'discord.js';

export = class extends Command {
  constructor(client: Client) {
    super(client, {
      name: 'bool',
      args: ['bool'],
    });
  }

  run(message: Message, [bool]: [boolean]) {
    return message.channel.send(bool);
  }
};
