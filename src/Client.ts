import { CommandStore, EventStore, ArgsStore, Lang } from 'ecstar';

import {
  Client as DiscordClient,
  ClientOptions as DiscordClientOptions,
  Snowflake,
} from 'discord.js';

interface EcstarOptions extends DiscordClientOptions {
  prefix: string;
  owner?: Snowflake;
  lang?: Lang;
  config?: { [key: string]: any };
}

export class EcstarClient extends DiscordClient {
  readonly options!: EcstarOptions;
  readonly config = this.options.config;
  readonly lang = this.options.lang || new Lang();
  readonly commands = new CommandStore(this);
  readonly events = new EventStore(this);
  readonly args = new ArgsStore(this);
  constructor(options: EcstarOptions) {
    super(options);
  }
}
