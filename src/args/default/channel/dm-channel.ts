import { Client, Args, isDMChannel } from 'ecstar';
import { Message, Channel } from 'discord.js';

export = class extends Args {
  constructor(client: Client) {
    super(client, 'voice-channel');
  }
  run(message: Message, text: string): Channel {
    const channel = this.client.channels.cache.find(
      (value) => isDMChannel(value) && value.id === text
    );
    if (!channel) throw this.client.lang.INVALID_ARGUMENT(this.name);
    return channel;
  }
};
