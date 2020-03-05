import { Client, Store, Event } from '../index';

export class EventStore extends Store<Event> {
  constructor(client: Client) {
    super(client, 'events');
  }
}
