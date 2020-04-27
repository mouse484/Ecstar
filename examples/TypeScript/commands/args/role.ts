import { Command, Client } from '../../../../src';
import { Message, Role } from 'discord.js';

export = class extends Command {
  constructor(client: Client) {
    super(client, {
      name: 'role',
      args: ['role'],
    });
  }

  run(message: Message, [role]: [Role]) {
    return message.channel.send(role.name);
  }
};
