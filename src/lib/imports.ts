import { Client } from '../index';

import Command from '../command/import';
import Event from '../event/import';

export class Imports {
  constructor(client: Client) {
    new Command(client);
    new Event(client);
  }
}
