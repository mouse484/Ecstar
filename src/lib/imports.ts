import { Client } from '../../src';

import command from '../command/import';

export default class Imports {
  constructor(client: Client) {
    new command(client);
  }
}
