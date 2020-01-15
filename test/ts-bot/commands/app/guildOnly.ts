import { Command } from '../../../../src';

export = class extends Command {
  constructor(client) {
    super(client, { name: 'guildOnly', guildOnly: true });
  }

  run(message) {
    return message.channel.send('guildOnly');
  }
};
