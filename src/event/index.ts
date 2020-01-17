import { Client, print } from '../index';

import Message from './default/message';

export abstract class EventBase {
  client: Client;
  name: string;
  constructor(client: Client, name: string) {
    this.client = client;
    this.name = name;
  }
  abstract run(...callback: any[]): void;
}

export default (client: Client, name: string, ...callback: [any, ...any[]]) => {
  switch (name) {
    case 'ready':
      print.info(`Go!! ${client.user.tag}`);
      break;
    case 'message':
      new Message(client).handle(callback);
      break;
  }
  const event: EventBase = client.events[name];
  if (event) {
    event.run(...callback);
  }
};
