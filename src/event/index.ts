import { Client, print, Event } from '../index';

import Message from './default/message';

export abstract class EventBase {
  constructor(public client: Client, public name: string) {}
  abstract run(...callback: any[]): void;
}

export default (client: Client, name: string, ...callback: [any, ...any[]]) => {
  switch (name) {
    case 'ready':
      print.info(`${client.lang.BOT_READY} ${client.user?.tag}`);
      break;
    case 'message':
      new Message(client).handle(callback);
      break;
  }
  const event: Event | undefined = client.events.get(name);
  if (event) {
    event.run(...callback);
  }
};
