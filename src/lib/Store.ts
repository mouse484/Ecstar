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
  getDefault() {
    const walk = async (dirpath: string) => {
      const dirents = await fs.readdir(dirpath, { withFileTypes: true });
      dirents
        .filter((dirent) => !dirent.name.endsWith('.d.ts'))
        .forEach(async (dirent) => {
          const thatPath = path.join(dirpath, dirent.name);
          if (dirent.isDirectory()) return walk(thatPath);
          this.import(thatPath);
        });
    };
    walk(path.join(this.dirname, 'default'));
  }
  getFile(path: string): T {
    const file = require(path);
    const instantiated: T = new file(this.client);
    return instantiated;
  }
  import(path: string): T {
    const file: T = this.getFile(path);
    print.store(this.type, 'import', file.name, path);
    this.set(file.name, file);
    return file;
  }
  update(path: string): void {
    let file: T = this.getFile(path);

    this.delete(file.name);
    delete require.cache[path];

    file = this.getFile(path);
    this.set(file.name, file);

    print.store(this.type, 'update', file.name, path);
  }
}
