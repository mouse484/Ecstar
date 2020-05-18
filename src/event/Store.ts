import { Client, Store, Event, print } from 'ecstar';

export class EventStore extends Store<Event> {
  constructor(client: Client) {
    super(client, 'events', __dirname);
  }
  import(path: string): void {
    const file: Event = super.getFile(path);
    print.store(this.type, 'import', file.name, path);
    this.set(path, file);

    this.client.on(file.name, (...args) => {
      file.run(...args);
    });
  }
  update(path: string): void {
    print.warn("Event file can't auto update, please restart.");
  }
}
