import { Client } from 'ecstar';
import { Message } from 'discord.js';

export type commandOptions = {
  readonly name: string;
  readonly aliases?: string[];
  readonly description?: string;
  readonly ownerOnly?: boolean;
  readonly guildOnly?: boolean;
  readonly args?: string[];
};

export abstract class CommandBase {
  constructor(public client: Client, public options: commandOptions) {}
  abstract run(message: Message, args?: any[]): void;
}
