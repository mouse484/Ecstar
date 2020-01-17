import { Client, Message, print } from '../index';

type Iinfo = {
  name: string;
  aliases?: string[];
  description?: string;
  ownerOnly?: boolean;
  guildOnly?: boolean;
  args?: { [argsName: string]: string } | boolean;
};

export abstract class CommandBase {
  client: Client;
  info: Iinfo;
  constructor(client: Client, info: Iinfo) {
    if (!client) print.error('A client must be specified.');
    if (!info.name) print.error('command name must be specified.');
    this.client = client;
    this.info = info;
  }
  abstract run(message: Message, args?: { [argsName: string]: string }): void;
}
