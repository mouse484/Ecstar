import { Client as DiscordClient } from 'discord.js';

import { CommandBase } from './command';

import imports from './lib/imports';
import Dispatcher from './lib/dispatcher';

class ExtendClient extends DiscordClient {
  emit(name, ...args) {
    return super.emit('*', name, ...args);
  }
}

export class EcstarClient extends ExtendClient {
  commands: CommandBase[];
  constructor(options: object) {
    super(options);

    new imports(this);

    const dispatcher: Dispatcher = new Dispatcher(this);

    this.on('*', (name, ...callback) => {
      dispatcher.event(name, ...callback);
    });
  }
}
