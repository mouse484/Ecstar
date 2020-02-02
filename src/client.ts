import { Client as DiscordClient, ClientOptions, Snowflake } from 'discord.js';

import { Command, Event, Lang } from './index';

import imports from './lib/imports';
import Dispatcher from './lib/dispatcher';

interface Ioption extends ClientOptions {
  prefix: string;
  owner?: Snowflake;
  lang?: Lang;
}

class ExtendClient extends DiscordClient {
  emit(name: string, ...args: any) {
    return super.emit('*', name, ...args);
  }
}

export class EcstarClient extends ExtendClient {
  readonly options: Ioption;
  commands: { [commandName: string]: Command } = {};
  events: { [eventName: string]: Event } = {};
  readonly lang: Lang;
  constructor(options: Ioption) {
    super(options);

    this.options = options;
    this.lang = options.lang || new Lang();

    new imports(this);

    const dispatcher: Dispatcher = new Dispatcher(this);

    this.on('*', (name: string, ...callback: [any, ...any[]]) => {
      dispatcher.event(name, ...callback);
    });
  }
}
