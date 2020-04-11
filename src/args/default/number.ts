import { Client, Args } from 'ecstar';

export = class extends Args {
  constructor(client: Client) {
    super(client, 'number');
  }
  run(message: string): number {
    const parsed = parseInt(message);

    if (Number.isNaN(parsed)) throw this.client.lang.ARGUMENT_INVALID_NUMBER;

    return parsed;
  }
};
