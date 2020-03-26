import { Client, EcstarFile } from '../index';

export abstract class EventBase extends EcstarFile {
  constructor(client: Client, name: string) {
    super(client, { name });
  }
  abstract run(message: string): void;
}
