import { Client, Args } from 'ecstar';

export = class extends Args {
  constructor(client: Client) {
    super(client, 'number');
  }
  run(message: string): number {
    const parsed = parseInt(message);

    console.log(parsed);

    return parsed;
  }
};
