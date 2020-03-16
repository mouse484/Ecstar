import { Client, Message } from '../index';

export type commandOptions = {
  readonly name: string;
  readonly aliases?: string[];
  readonly description?: string;
  readonly ownerOnly?: boolean;
  readonly guildOnly?: boolean;
  readonly args?: { [argsName: string]: string } | boolean;
};

export abstract class CommandBase {
  constructor(public client: Client, public options: commandOptions) {}
  abstract run(message: Message, args?: { [argsName: string]: string }): void;
}
