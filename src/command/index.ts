import print from '../lib/print';
import { EcstarClient } from '../client';

interface infoType {
  name: string;
  aliases?: string[];
  description?: string;
}

export class CommandBase {
  client: EcstarClient;
  info: infoType;
  constructor(client: EcstarClient, info: infoType) {
    if (!client) print.error('A client must be specified.');
    if (!info.name) print.error('command name must be specified.');
    this.client = client;
    this.info = info;
  }
}
