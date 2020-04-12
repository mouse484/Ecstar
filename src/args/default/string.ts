import { Client, Args } from 'ecstar';
import { strict } from 'assert';

export = class extends Args {
  constructor(client: Client) {
    super(client, 'string');
  }
  run(message: string): string {
    if (!String) throw this.client.lang.INVALID_ARGUMENT(this.options.name);
    return message;
  }
};
