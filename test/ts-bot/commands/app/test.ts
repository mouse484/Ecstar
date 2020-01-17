import { Command, Client, Message } from '../../../../src';

export = class extends Command {
  constructor(client: Client) {
    super(client, { name: 'test' });
  }

  run(message: Message) {
    return message.channel.send('test');
  }
};
