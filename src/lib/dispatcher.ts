import { Client } from '../index';

import Event from '../event';

export default class Dispatcher {
  readonly client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  event(name: string, ...callback: [any, ...any[]]) {
    Event(this.client, name, ...callback);
  }
}
