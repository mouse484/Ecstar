import { Client } from '../index';

export class File {
  constructor(public client: Client, public options: { name: string }) {}
}
