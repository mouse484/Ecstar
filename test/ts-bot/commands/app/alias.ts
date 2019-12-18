import { Command } from '../../../../src';

export = class extends Command {
  constructor(client) {
    super(client, { name: 'alias', aliases: ['エイリアス'] });
  }

  run(message) {
    return message.channel.send('ok!');
  }
};
