import { Client, Store, Event, print } from 'ecstar';

export class EventStore extends Store<Event> {
  constructor(client: Client) {
    super(client, 'events', __dirname);
  }
  import(path: string): void {
    const file: Event = super.getFile(path);

    print.store(this.type, 'import', file.name, path);
    super.set(path, file);

    this.client.on(file.name, file.bindedRun);
  }
  update(path: string): void {
    let file = super.get(path);

    if (!file) return;
    this.client.off(file.name, file.bindedRun);
    super.delete(file.name);

    delete require.cache[path];
    file = super.getFile(path);

    if (!file) return;
    this.client.on(file.name, file.bindedRun);
    super.set(file.name, file);

    print.store(this.type, 'update', file.name, path);
  }
}
