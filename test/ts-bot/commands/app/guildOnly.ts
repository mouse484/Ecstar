import { Command, Client, Message } from '../../../../src';

export = class extends Command {
  constructor(client: Client) {
    super(client, { name: 'guildOnly', guildOnly: true });
  }

  run(message: Message) {
    return message.channel.send('guildOnly');
  }
};
