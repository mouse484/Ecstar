import { Client, EcstarFile } from 'ecstar';
import { ClientEvents } from 'discord.js';

export abstract class EventBase extends EcstarFile {
  bindedRun = this.run.bind(this);
  constructor(public client: Client, public name: keyof ClientEvents) {
    super(client, name);
  }
  abstract run(...callback: any[]): void;
}
