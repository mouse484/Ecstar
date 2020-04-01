import { Client, Store, Command, print } from '@/ecstar';
import path from 'path';
import { promises as fs } from 'fs';

export class CommandStore extends Store<Command> {
  constructor(client: Client) {
    super(client, 'commands');
  }
  set(key: string, value: Command): this {
    super.set(key, value);
    const { aliases } = value.options;
    if (aliases) {
      aliases.forEach((alias) => {
        super.set(alias, value);
        print.store('commands', 'import', alias, `alias(${key})`);
      });
    }
    return this;
  }
  delete(key: string): boolean {
    const command: Command | undefined = super.get(key);
    if (!command) return false;
    const { aliases } = command.options;
    if (aliases) {
      aliases.forEach((alias) => {
        super.delete(alias);
      });
    }
    return true;
  }
  async getDefault() {
    const dirpath = path.join(__dirname, 'default');
    const files = await fs.readdir(dirpath);
    files.forEach((file) => {
      super.import(path.join(dirpath, file));
    });
  }
}
