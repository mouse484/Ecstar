import print from '../lib/print';

import { Client } from '../../src';

interface infoType {
  name: string;
  aliases?: string[];
  description?: string;
}

export class CommandBase {
  client: Client;
  info: infoType;
  constructor(client: Client, info: infoType) {
    if (!client) print.error('A client must be specified.');
    if (!info.name) print.error('command name must be specified.');
    this.client = client;
    this.info = info;
  }
}
