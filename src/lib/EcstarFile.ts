import { Client } from '../index';

export class EcstarFile {
  constructor(public client: Client, public options: { name: string }) {}
}
