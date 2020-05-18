import { Event, Client } from '../../../src';

export = class extends Event {
  constructor(client: Client) {
    super(client, 'ready');
  }

  run() {
    this.client.user?.setActivity('Ecstar');
  }
};
