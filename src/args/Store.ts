import { Client, Store, Args } from 'ecstar';

export class ArgsStore extends Store<Args> {
  constructor(client: Client) {
    super(client, 'args', __dirname);
  }
}
