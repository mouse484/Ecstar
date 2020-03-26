import { Client, Args } from '../../index';

export = class extends Args {
  constructor(client: Client) {
    super(client, 'string');
  }
  run(message: string): string {
    return message;
  }
};
