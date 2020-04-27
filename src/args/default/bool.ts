import { Client, Args } from 'ecstar';
import { Message } from 'discord.js';

const truthy = ['yes', 'y', 'true'];
const falsy = ['no', 'n', 'false'];

export = class extends Args {
  constructor(client: Client) {
    super(client, 'bool');
  }
  run(message: Message, text: string): boolean {
    if (!text) throw this.client.lang.INVALID_ARGUMENT(this.options.name);

    const lowText = text.toLowerCase();

    if (truthy.includes(lowText)) {
      return true;
    } else if (falsy.includes(lowText)) {
      return false;
    } else {
      throw this.client.lang.INVALID_ARGUMENT(this.options.name);
    }
  }
};
