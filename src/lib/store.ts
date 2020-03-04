import { Client, directory, Event, print } from '../index';
import { promises as fs } from 'fs';
import path from 'path';

export class Store {
  store: Map<string, Event> = new Map();
  constructor(public client: Client, public type: string) {
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
        const file: Event = new (require(direntPath))();
        print.import('event', file.name, direntPath);
        this.store.set(file.name, file);
      }
    }
  }
}
