import { Client, EcstarFile } from 'ecstar';
import { Message, PermissionResolvable } from 'discord.js';

export type commandOptions = {
  readonly name: string;
  readonly aliases?: string[];
  readonly description?: string;
  readonly ownerOnly?: boolean;
  readonly guildOnly?: boolean;
  readonly args?: (string | { type: string; optional?: boolean })[];
  readonly permissions?: PermissionResolvable[];
};

export abstract class CommandBase extends EcstarFile {
  constructor(public client: Client, public options: commandOptions) {
    super(client, options.name);
  }
  abstract run(message: Message, args?: any[]): void;
}
