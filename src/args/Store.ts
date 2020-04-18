import { Client, Store, Args } from 'ecstar';
import path from 'path';
import { promises as fs } from 'fs';

export class ArgsStore extends Store<Args> {
  constructor(client: Client) {
    super(client, 'args', __dirname);
  }
}
