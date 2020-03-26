import { Command, Client, Message } from '../../../../src';

export = class extends Command {
  constructor(client: Client) {
    super(client, {
      name: 'plus',
      args: { A: 'number', B: 'number' },
    });
  }

  run(message: Message, { A, B }: { A: number; B: number }) {
    return message.channel.send(A + B);
  }
};
