import { Command, Client } from '../../../../src';
import { Message } from 'discord.js';

export = class extends Command {
  constructor(client: Client) {
    super(client, {
      name: 'plus',
      args: ['number', 'number'],
    });
  }

  run(message: Message, [variablesA, variablesB]: [string, string]) {
    return message.channel.send(variablesA + variablesB);
  }
};
