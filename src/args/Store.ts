import { Client, Store, Args } from 'ecstar';
import path from 'path';
import { promises as fs } from 'fs';

export class ArgsStore extends Store<Args> {
  constructor(client: Client) {
    super(client, 'args');
  }
  async getDefault() {
    const dirpath = path.join(__dirname, 'default');
    const files = await fs.readdir(dirpath);
    files
      .filter((file) => !file.endsWith('.d.ts'))
      .forEach((file) => {
        super.import(path.join(dirpath, file));
      });
  }
}
