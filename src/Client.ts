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
  ClientEvents,
  Snowflake,
} from 'discord.js';

interface EcstarOptions extends DiscordClientOptions {
  prefix: string;
  owner?: Snowflake;
  lang?: Lang;
  config?: { [key: string]: any };
}

declare module 'discord.js' {
  interface ClientEvents {
    '*': [string, ...unknown[]];
  }
}

class ExtendDiscordClient extends DiscordClient {
  emit<K extends keyof ClientEvents>(
    name: keyof ClientEvents,
    ...args: ClientEvents[K]
  ) {
    super.emit(name, ...args);
    return super.emit('*', name, ...args);
  }
}

export class EcstarClient extends ExtendDiscordClient {
  readonly options!: EcstarOptions;
  readonly config = this.options.config;
  readonly lang = this.options.lang || new Lang();
  readonly commands = new CommandStore(this);
  readonly events = new EventStore(this);
  readonly args = new ArgsStore(this);
  constructor(options: EcstarOptions) {
    super(options);

    this.on('*', (name: string, ...callback: unknown[]) => {
      eventHandler(this, name, ...callback);
    });
  }
}
