import { Client, Message, print, commandOptions } from '../index';

export abstract class CommandBase {
  readonly client: Client;
  readonly options: commandOptions;
  constructor(client: Client, options: commandOptions) {
    if (!client) print.error('A client must be specified.');
    if (!options.name) print.error('command name must be specified.');
    this.client = client;
    this.options = options;
  }
  abstract run(message: Message, args?: { [argsName: string]: string }): void;
}
