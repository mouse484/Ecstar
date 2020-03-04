import { Client, Message, print, commandOptions } from '../index';

export abstract class CommandBase {
  constructor(public client: Client, public options: commandOptions) {}
  abstract run(message: Message, args?: { [argsName: string]: string }): void;
}
