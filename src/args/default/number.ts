import { Client, Args } from '../../index';

export = class extends Args {
  constructor(client: Client) {
    super(client, 'number');
  }
  run(message: string): number {
    return parseInt(message);
  }
};
