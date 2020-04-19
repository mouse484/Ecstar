import { Client, Args } from 'ecstar';
import { Message } from 'discord.js';

export = class extends Args {
  constructor(client: Client) {
    super(client, 'number');
  }
  run(message: Message, text: string): number {
    const parsed = parseInt(text);

    if (Number.isNaN(parsed)) {
      throw this.client.lang.INVALID_ARGUMENT(this.options.name);
    }
    return parsed;
  }
};
