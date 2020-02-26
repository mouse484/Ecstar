import { Client as DiscordClient } from 'discord.js';

import { Command, Event, Lang, EcstarOptions } from './index';

import imports from './lib/imports';
import Dispatcher from './lib/dispatcher';

export class ExtendClient extends DiscordClient {
  emit(name: string, ...args: any) {
    return super.emit('*', name, ...args);
  }
}

export class EcstarClient extends ExtendClient {
  readonly options: EcstarOptions;
  commands: { [commandName: string]: Command } = {};
  events: { [eventName: string]: Event } = {};
  readonly lang: Lang;
  constructor(options: EcstarOptions) {
    super(options);

    this.options = options;
    this.lang = options.lang || new Lang();

    new imports(this);

    const dispatcher: Dispatcher = new Dispatcher(this);

    this.on('*', (name: string, ...callback: [any, ...any[]]) => {
      dispatcher.event(name, ...callback);
    });
  }
}
