import { Client, Store, Command, print } from '../index';

export class CommandStore extends Store<Command> {
  constructor(client: Client) {
    super(client, 'commands');
  }
  set(key: string, value: Command): this {
    super.set(key, value);
    const aliases = value.options.aliases;
    if (aliases) {
      aliases.forEach(alias => {
        super.set(alias, value);
        print.import('commands', alias, `alias(${key})`);
      });
    }
    return this;
  }
}
