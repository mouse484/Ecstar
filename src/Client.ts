import {
  CommandStore,
  EventStore,
  ArgsStore,
  Lang,
  eventHandler,
} from './index';

import {
  Client as DiscordClient,
  ClientOptions as DiscordClientOptions,
  Snowflake,
} from 'discord.js';

interface EcstarOptions extends DiscordClientOptions {
  prefix: string;
  owner?: Snowflake;
  lang?: Lang;
}

type exCallback = [any, ...any[]];

declare module 'discord.js' {
  interface ClientEvents {
    '*': exCallback;
  }
}

class ExtendClient extends DiscordClient {
  emit(name: string, ...callback: exCallback) {
    super.emit(name, ...callback);
    return super.emit('*', name, ...callback);
  }
}

export class EcstarClient extends ExtendClient {
  readonly options!: EcstarOptions;
  readonly lang = this.options.lang || new Lang();
  commands = new CommandStore(this);
  events = new EventStore(this);
  args = new ArgsStore(this);
  constructor(options: EcstarOptions) {
    super(options);

    this.on('*', (name: string, ...callback: exCallback) => {
      eventHandler(this, name, ...callback);
    });
  }
}
