import print from '../lib/print';

export class CommandBase {
  client: any;
  info: string;
  constructor(client, info) {
    if (!client) print.error('A client must be specified.');
    if (!info.name) print.error('command name must be specified.');
    this.client = client;
    this.info = info;
  }
}
