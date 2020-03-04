import { Client, Store, Command } from '../index';

export class CommandStore extends Store<Command> {
  constructor(client: Client) {
    super(client, 'commands');
  }
}
