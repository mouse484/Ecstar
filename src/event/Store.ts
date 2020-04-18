import { Client, Store, Event } from 'ecstar';

export class EventStore extends Store<Event> {
  constructor(client: Client) {
    super(client, 'events', __dirname);
  }
}
