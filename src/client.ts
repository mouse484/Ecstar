import { Client as DiscordClient, ClientOptions } from 'discord.js';

import { Command } from './';

import imports from './lib/imports';
import Dispatcher from './lib/dispatcher';

interface optionType extends ClientOptions {
  prefix: string;
}

class ExtendClient extends DiscordClient {
  emit(name, ...args) {
    return super.emit('*', name, ...args);
  }
}

export class EcstarClient extends ExtendClient {
  commands: Command[];
  options: optionType;
  constructor(options: optionType) {
    super(options);

    new imports(this);

    const dispatcher: Dispatcher = new Dispatcher(this);

    this.on('*', (name, ...callback) => {
      dispatcher.event(name, ...callback);
    });
  }
}
