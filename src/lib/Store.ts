import { Client, directory, print, File } from '../index';
import { promises as fs } from 'fs';
import path from 'path';
import { watch } from 'chokidar';

export class Store<T extends File> extends Map<string, T> {
  constructor(public client: Client, public type: 'commands' | 'events') {
    super();
    const thatdirectory = directory.getPath(type);
    if (thatdirectory) {
      print.info(client.lang.LOADING(type));
      watch(thatdirectory)
        .on('change', (path: string) => this.update(path))
        .on('add', (path: string) => this.import(path))
        .on('unlink', (path: string) => this.remove(path));
    }
  }
  getFile(path: string): T {
    const file = require(path);
    const instantiated: T = new file();
    return instantiated;
  }
  import(path: string): void {
    const file: T = this.getFile(path);
    print.import(this.type, file.options.name, path);
    this.set(file.options.name, file);
  }
  remove(path: string): void {
    const file: T = this.getFile(path);
    this.delete(file.options.name);
    delete require.cache[path];
  }
  update(path: string): void {
    this.remove(path);
    this.import(path);
  }
}
