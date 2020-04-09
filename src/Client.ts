import {
  CommandStore,
  EventStore,
  ArgsStore,
  Lang,
  eventHandler,
} from 'ecstar';

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
  readonly commands = new CommandStore(this);
  readonly events = new EventStore(this);
  readonly args = new ArgsStore(this);
  constructor(options: EcstarOptions) {
    super(options);

    this.on('*', (name: string, ...callback: exCallback) => {
      eventHandler(this, name, ...callback);
    });
  }
}
