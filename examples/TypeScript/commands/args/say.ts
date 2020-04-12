import { Command, Client } from '../../../../src';
import { Message } from 'discord.js';

export = class extends Command {
  constructor(client: Client) {
    super(client, {
      name: 'say',
      args: ['string'],
      description: 'Reply message',
    });
  }

  run(message: Message, [text]: [string]) {
    return message.channel.send(text);
  }
};
