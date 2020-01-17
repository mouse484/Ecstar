import { Command, Client, Message } from '../../../../src';

export = class extends Command {
  constructor(client: Client) {
    super(client, { name: 'owner', ownerOnly: true });
  }

  run(message: Message) {
    return message.channel.send('ok!');
  }
};
