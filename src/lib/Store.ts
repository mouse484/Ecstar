import { Client, directory, print, EcstarFile } from '../index';
import { watch } from 'chokidar';

export class Store<T extends EcstarFile> extends Map<string, T> {
  constructor(public client: Client, public type: string) {
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
  getFile(path: string): T {
    const file = require(path);
    const instantiated: T = new file(this.client);
    return instantiated;
  }
  getDefault() {}
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
