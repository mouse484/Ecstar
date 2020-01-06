import { Command } from '../../../../src';

module.exports = class extends Command {
  constructor(client) {
    super(client, { name: 'say', args: true });
  }

  run(message, { all }) {
    return message.channel.send(all);
  }
};
