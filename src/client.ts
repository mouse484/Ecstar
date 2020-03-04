import {
  DiscordClient,
  Command,
  CommandStore,
  Event,
  EventStore,
  Lang,
  Dispatcher,
  EcstarOptions,
  exCallback,
} from './index';

export class ExtendClient extends DiscordClient {
  emit(name: string, ...callback: exCallback) {
    return super.emit('*', name, ...callback);
  }
}

export class EcstarClient extends ExtendClient {
  readonly options!: EcstarOptions;
  readonly lang = this.options.lang || new Lang();
  commands: Map<string, Command> = new CommandStore(this).store;
  events: Map<string, Event> = new EventStore(this).store;
  constructor(options: EcstarOptions) {
    super(options);

    const dispatcher: Dispatcher = new Dispatcher(this);

    this.on('*', (name: string, ...callback: exCallback) => {
      dispatcher.event(name, ...callback);
    });
  }
}
