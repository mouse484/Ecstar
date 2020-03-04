import {
  DiscordClient,
  Command,
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
  commands: { [commandName: string]: Command } = {};
  events: Map<string, Event> = new EventStore(this).store;
  readonly lang: Lang;
  constructor(options: EcstarOptions) {
    super(options);

    this.lang = options.lang || new Lang();

    const dispatcher: Dispatcher = new Dispatcher(this);

    this.on('*', (name: string, ...callback: exCallback) => {
      dispatcher.event(name, ...callback);
    });
  }
}
