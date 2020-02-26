import {
  DiscordClient,
  Command,
  Event,
  Lang,
  Imports,
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
  readonly options: EcstarOptions;
  commands: { [commandName: string]: Command } = {};
  events: { [eventName: string]: Event } = {};
  readonly lang: Lang;
  constructor(options: EcstarOptions) {
    super(options);

    this.options = options;
    this.lang = options.lang || new Lang();

    new Imports(this);

    const dispatcher: Dispatcher = new Dispatcher(this);

    this.on('*', (name: string, ...callback: exCallback) => {
      dispatcher.event(name, ...callback);
    });
  }
}
