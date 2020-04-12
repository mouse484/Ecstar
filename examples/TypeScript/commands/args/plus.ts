import { Command, Client } from '../../../../src';
import { Message } from 'discord.js';

export = class extends Command {
  constructor(client: Client) {
    super(client, {
      name: 'plus',
      args: [
        { name: 'variablesA', type: 'number' },
        { name: 'variablesB', type: 'number' },
      ],
    });
  }

  run(
    message: Message,
    { variablesA, variablesB }: { [type: string]: number }
  ) {
    return message.channel.send(variablesA + variablesB);
  }
};
