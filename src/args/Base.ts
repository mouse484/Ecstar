import { Client, EcstarFile } from '../index';

export abstract class ArgsBase extends EcstarFile {
  constructor(client: Client, name: string) {
    super(client, { name });
  }
  abstract run(message: string): any;
}
