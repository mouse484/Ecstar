import { Client, Args, isTextChannel, isVoiceChannel } from 'ecstar';
import { Message, Channel } from 'discord.js';

export = class extends Args {
  constructor(client: Client) {
    super(client, 'channel');
  }
  run(message: Message, text: string): Channel {
    const channel = this.client.channels.cache.find((value) =>
      isTextChannel(value) || isVoiceChannel(value)
        ? value.name === text
        : value.id === text
    );
    if (!channel) throw this.client.lang.INVALID_ARGUMENT(this.options.name);
    return channel;
  }
};
