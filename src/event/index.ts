import { Client } from '../../src';

import Message from './default/message';
import print from '../lib/print';

export class EventBase {
  client: Client;
  name: string;
  constructor(client: Client, name: string) {
    this.client = client;
    this.name = name;
  }
}

export default (client: Client, name: string, ...callback: any) => {
  switch (name) {
    case 'ready':
      print.info(`Go!! ${client.user.tag}`);
      break;
    case 'message':
      new Message(client).handle(callback);
      break;
    default:
      break;
  }
  return true;
};
