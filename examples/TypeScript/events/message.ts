import { Event, Client } from '../../../src';
import { Message } from 'discord.js';

export = class extends Event {
  constructor(client: Client) {
    super(client, 'message');
  }

  run(message: Message) {
    return message.content;
  }
};
