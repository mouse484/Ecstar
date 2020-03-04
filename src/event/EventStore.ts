import { Client, Store } from '../index';

export class EventStore extends Store {
  constructor(client: Client) {
    super(client, 'events');
  }
}
