import { Lang, DiscordClientOptions, Snowflake } from '../index';

export interface EcstarOptions extends DiscordClientOptions {
  prefix: string;
  owner?: Snowflake;
  lang?: Lang;
}

export type exCallback = [any, ...any[]];
