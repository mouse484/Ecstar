import { Client, Args } from 'ecstar';

export = class extends Args {
  constructor(client: Client) {
    super(client, 'string');
  }
  run(message: string): string {
    if (!message) throw this.client.lang.INVALID_ARGUMENT(this.options.name);
    return message;
  }
};
