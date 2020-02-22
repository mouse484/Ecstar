import { Event, Client, Message } from '../../../src';

export = class extends Event {
  constructor(client: Client) {
    super(client, 'message');
  }

  run(message: Message) {
    return message.content;
  }
};
