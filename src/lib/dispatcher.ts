import { Client } from '../../src';

import Event from '../event';

export default class Dispatcher {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  event(name: string, ...callback: any) {
    Event(this.client, name, ...callback);
  }
}
