import print from '../lib/print';

import { Client } from '../../src';

interface Info {
  name: string;
  aliases?: string[];
  description?: string;
  ownerOnly?: boolean;
  args?: { [argsName: string]: string };
}

export class CommandBase {
  client: Client;
  info: Info;
  constructor(client: Client, info: Info) {
    if (!client) print.error('A client must be specified.');
    if (!info.name) print.error('command name must be specified.');
    this.client = client;
    this.info = info;
  }
}
