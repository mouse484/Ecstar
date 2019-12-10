import Command from '../../../../src/command';

export = class extends Command {
  constructor(client) {
    super(client, { name: 'test', aliases: ['テスト'] });
  }

  run(message) {
    return message.channel.send('test');
  }
};
