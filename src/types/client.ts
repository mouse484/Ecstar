import { ClientOptions, Snowflake } from 'discord.js';

import { Lang } from '../index';

export interface EcstarOptions extends ClientOptions {
  prefix: string;
  owner?: Snowflake;
  lang?: Lang;
}
