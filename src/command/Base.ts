import { Client } from 'ecstar';
import { Message } from 'discord.js';

export type commandOptions = {
  readonly name: string;
  readonly aliases?: string[];
  readonly description?: string;
  readonly ownerOnly?: boolean;
  readonly guildOnly?: boolean;
  readonly args?: Array<{ name: string; type: string }>;
};

export abstract class CommandBase {
  constructor(public client: Client, public options: commandOptions) {}
  abstract run(message: Message, args?: { [argsName: string]: any }): void;
}
