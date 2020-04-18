import { Client, directory, print, EcstarFile } from 'ecstar';
import { watch } from 'chokidar';
import path from 'path';
import { promises as fs } from 'fs';

export class Store<T extends EcstarFile> extends Map<string, T> {
  constructor(
    public client: Client,
    public type: string,
    private dirname: string
  ) {
    super();
    const thatdirectory = directory.getPath(type);
    if (thatdirectory) {
      print.info(client.lang.LOADING(type));
      watch(thatdirectory)
        .on('change', (path: string) => this.update(path))
        .on('add', (path: string) => this.import(path));
      this.getDefault();
    }
  }
  async getDefault() {
    const dirpath = path.join(this.dirname, 'default');
    const files = await fs.readdir(dirpath);
    files
      .filter((file) => !file.endsWith('.d.ts'))
      .forEach((file) => {
        this.import(path.join(dirpath, file));
      });
  }
  getFile(path: string): T {
    const file = require(path);
    const instantiated: T = new file(this.client);
    return instantiated;
  }
  import(path: string): T {
    const file: T = this.getFile(path);
    print.store(this.type, 'import', file.options.name, path);
    this.set(file.options.name, file);
    return file;
  }
  update(path: string): void {
    let file: T = this.getFile(path);

    this.delete(file.options.name);
    delete require.cache[path];

    file = this.getFile(path);
    this.set(file.options.name, file);

    print.store(this.type, 'update', file.options.name, path);
  }
}
