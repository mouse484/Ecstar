import { Client, Args } from 'ecstar';
import { Message } from 'discord.js';

export = class extends Args {
  constructor(client: Client) {
    super(client, 'string');
  }
  run(message: Message, text: string): string {
    if (!text) throw this.client.lang.INVALID_ARGUMENT(this.options.name);
    return text;
  }
};
