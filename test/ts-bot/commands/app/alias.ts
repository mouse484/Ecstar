import { Command, Client, Message } from '../../../../src';

export = class extends Command {
  constructor(client: Client) {
    super(client, { name: 'alias', aliases: ['エイリアス'] });
  }

  run(message: Message) {
    return message.channel.send('ok!');
  }
};
