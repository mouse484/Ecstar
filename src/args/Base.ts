import { Client, EcstarFile } from 'ecstar';
import { Message } from 'discord.js';

export abstract class ArgsBase extends EcstarFile {
  constructor(client: Client, name: string) {
    super(client, name);
  }
  abstract run(message: Message, text: string): any;
}
