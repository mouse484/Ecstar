import { Client } from '../../src';

import Command from '../command/import';
import Event from "../event/import"

export default class Imports {
  constructor(client: Client) {
    new Command(client);
    new Event(client);
  }
}
