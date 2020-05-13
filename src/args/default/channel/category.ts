import { Client, Args, isCategoryChannel } from 'ecstar';
import { Message, Channel } from 'discord.js';

export = class extends Args {
  constructor(client: Client) {
    super(client, 'category');
  }
  run(message: Message, text: string): Channel {
    const channel = this.client.channels.cache.find(
      (value) =>
        isCategoryChannel(value) &&
        [value.name, value.id, `<#${value.id}>`].includes(text)
    );
    if (!channel) throw this.client.lang.INVALID_ARGUMENT(this.options.name);
    return channel;
  }
};
