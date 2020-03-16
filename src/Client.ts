import {
  DiscordClient,
  CommandStore,
  EventStore,
  Lang,
  Dispatcher,
  DiscordClientOptions,
  Snowflake,
} from './index';

interface EcstarOptions extends DiscordClientOptions {
  prefix: string;
  owner?: Snowflake;
  lang?: Lang;
}

type exCallback = [any, ...any[]];

class ExtendClient extends DiscordClient {
  emit(name: string, ...callback: exCallback) {
    super.emit(name, ...callback);
    return super.emit('*', name, ...callback);
  }
}

export class EcstarClient extends ExtendClient {
  readonly options!: EcstarOptions;
  readonly lang = this.options.lang || new Lang();
  commands = new CommandStore(this);
  events = new EventStore(this);
  constructor(options: EcstarOptions) {
    super(options);

    const dispatcher: Dispatcher = new Dispatcher(this);

    this.on('*', (name: string, ...callback: exCallback) => {
      dispatcher.event(name, ...callback);
    });
  }
}
