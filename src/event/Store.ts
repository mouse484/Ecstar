import { Client, Store, Event } from '../index';
import path from 'path';
import { promises as fs } from 'fs';

export class EventStore extends Store<Event> {
  constructor(client: Client) {
    super(client, 'events');
  }
  async getDefault() {
    const dirpath = path.join(__dirname, 'default');
    const files = await fs.readdir(dirpath);
    files.forEach(file => {
      super.import(path.join(dirpath, file));
    });
  }
}
