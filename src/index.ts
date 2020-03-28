export {
  Client as DiscordClient,
  ClientOptions as DiscordClientOptions,
  Snowflake,
  Message,
} from 'discord.js';

export { EcstarClient as Client } from './Client';

export * from './lib';

export { CommandBase as Command } from './command/Base';
export { EventBase as Event } from './event/Base';
export { ArgsBase as Args } from './args/Base';
export { LangBase as Lang } from './lang';

export { EventStore } from './event/Store';
export { CommandStore } from './command/Store';
export { ArgsStore } from './args/Store';

export { eventHandler } from './event/handler';

export * from './lib/isType';
