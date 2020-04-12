import { Client, Args } from 'ecstar';
import { Channel } from 'discord.js';

export = class extends Args {
  constructor(client: Client) {
    super(client, 'channel');
  }
  run(message: string): Channel {
    const channel = this.client.channels.cache.get(message);
    if (!channel) throw this.client.lang.INVALID_ARGUMENT(this.options.name);
    return channel;
  }
};
