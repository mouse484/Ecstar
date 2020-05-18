import { Client, Args, equalsIgnoreCase } from 'ecstar';
import { Message, Role } from 'discord.js';

export = class extends Args {
  constructor(client: Client) {
    super(client, 'role');
  }
  run(message: Message, text: string): Role {
    const role = message.guild?.roles.cache.find(
      (value) => value.id === text || equalsIgnoreCase(value.name, text)
    );
    if (!role) throw this.client.lang.INVALID_ARGUMENT(this.name);
    return role;
  }
};
