import { Client, directory, print, File } from '../index';
import { promises as fs } from 'fs';
import path from 'path';

export class Store<T extends File> {
  store: Map<string, T> = new Map();
  constructor(public client: Client, public type: 'commands' | 'events') {
    this.import(directory.getPath(type));
  }
  async import(directoryPath: string) {
    const dirents = await fs.readdir(directoryPath, {
      withFileTypes: true,
    });

    for (const dirent of dirents) {
      const direntPath = path.join(directoryPath, dirent.name);
      if (dirent.isDirectory()) {
        this.import(direntPath);
      } else {
        const file: T = new (require(direntPath))();
        print.import(this.type, file.options.name, direntPath);
        this.store.set(file.options.name, file);
      }
    }
  }
}
