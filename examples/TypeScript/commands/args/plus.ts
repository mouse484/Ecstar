import { Command, Client, Message } from '../../../../src';

export = class extends Command {
  constructor(client: Client) {
    super(client, {
      name: 'plus',
      args: { variablesA: 'number', variablesB: 'number' },
    });
  }

  run(
    message: Message,
    { variablesA, variablesB }: { [type: string]: number }
  ) {
    return message.channel.send(variablesA + variablesB);
  }
};
