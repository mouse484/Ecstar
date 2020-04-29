import { Client, print, Event } from 'ecstar';
import { ClientEvents, Message } from 'discord.js';

import MessageEvent from './default/message';

export const eventHandler = (
  client: Client,
  name: string,
  ...callback: unknown[]
) => {
  switch (name) {
    case 'ready':
      print.info(`${client.lang.BOT_READY} ${client.user?.tag}`);
      break;
    case 'message':
      const message = callback[0];
      if (message instanceof Message) new MessageEvent(client).run(message);
      break;
    default: {
      const event: Event | undefined = client.events.get(name);
      if (event) {
        event.run(...callback);
      }
    }
  }
};
