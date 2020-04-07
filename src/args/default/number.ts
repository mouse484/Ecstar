import { Client, Args, ArgsReturn } from 'ecstar';

export = class extends Args {
  constructor(client: Client) {
    super(client, 'number');
  }
  run(message: string): ArgsReturn<number> {
    const parsed = parseInt(message);
    if (parsed) {
      return { parsed, error: false };
    }
    return { parsed, error: true };
  }
};
