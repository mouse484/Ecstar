import { Command } from '../../../../src';

export = class extends Command {
  constructor(client) {
    super(client, { name: 'owner', ownerOnly: true });
  }

  run(message) {
    return message.channel.send('ok!');
  }
};
