import { Client as DiscordClient, ClientOptions, Snowflake } from 'discord.js';

import { Command, Event } from './';

import imports from './lib/imports';
import Dispatcher from './lib/dispatcher';

interface optionType extends ClientOptions {
  prefix: string;
  owner?: Snowflake;
}

class ExtendClient extends DiscordClient {
  emit(name, ...args) {
    return super.emit('*', name, ...args);
  }
}

export class EcstarClient extends ExtendClient {
  options: optionType;
  commands: Command[];
  events: Event[];
  constructor(options: optionType) {
    super(options);

    new imports(this);

    const dispatcher: Dispatcher = new Dispatcher(this);

    this.on('*', (name, ...callback) => {
      dispatcher.event(name, ...callback);
    });
  }
}
