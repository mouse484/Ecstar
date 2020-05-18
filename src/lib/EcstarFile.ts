import { Client } from 'ecstar';

export class EcstarFile {
  constructor(public client: Client, public name: string) {}
}
