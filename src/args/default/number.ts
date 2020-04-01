import { Client, Args } from '@/ecstar';

export = class extends Args {
  constructor(client: Client) {
    super(client, 'number');
  }
  run(message: string): number {
    return parseInt(message);
  }
};
