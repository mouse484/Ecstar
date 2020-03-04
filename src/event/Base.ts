import { Client, File } from '../index';

export abstract class EventBase extends File {
  constructor(client: Client, name: string) {
    super(client, { name });
  }
  abstract run(...callback: any[]): void;
}
