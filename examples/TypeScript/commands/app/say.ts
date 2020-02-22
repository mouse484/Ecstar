import { Command, Client, Message } from '../../../../src';

export = class extends Command {
  constructor(client: Client) {
    super(client, { name: 'say', args: true, description: 'Reply message' });
  }

  run(message: Message, { all }: { all: string }) {
    return message.channel.send(all);
  }
};
