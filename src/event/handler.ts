import { Client, print, Event } from 'ecstar';

import Message from './default/message';

export const eventHandler = (
  client: Client,
  name: string,
  ...callback: [any, ...any[]]
) => {
  switch (name) {
    case 'ready':
      print.info(`${client.lang.BOT_READY} ${client.user?.tag}`);
      break;
    case 'message':
      new Message(client).run(callback);
      break;
  }
  const event: Event | undefined = client.events.get(name);
  if (event) {
    event.run(...callback);
  }
};
