import { Client, Message, print } from '../index';

type Iinfo = {
  readonly name: string;
  readonly aliases?: string[];
  readonly description?: string;
  readonly ownerOnly?: boolean;
  readonly guildOnly?: boolean;
  readonly args?: { [argsName: string]: string } | boolean;
};

export abstract class CommandBase {
  readonly client: Client;
  readonly info: Iinfo;
  constructor(client: Client, info: Iinfo) {
    if (!client) print.error('A client must be specified.');
    if (!info.name) print.error('command name must be specified.');
    this.client = client;
    this.info = info;
  }
  abstract run(message: Message, args?: { [argsName: string]: string }): void;
}
