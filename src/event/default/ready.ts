import { Client, Event, print } from 'ecstar';

export = class extends Event {
  constructor(client: Client) {
    super(client, 'ready');
  }
  run() {
    print.info(`${this.client.lang.BOT_READY} ${this.client.user?.tag}`);
  }
};
