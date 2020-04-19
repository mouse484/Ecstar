import { Client, Args } from 'ecstar';
import { Message, GuildMember } from 'discord.js';

export = class extends Args {
  constructor(client: Client) {
    super(client, 'member');
  }
  run(message: Message, text: string): GuildMember {
    const members = message.guild?.members.cache;
    const member = members?.find(
      (value) =>
        value.id === text ||
        value.displayName === text ||
        value.user.username === text ||
        value.user.tag === text
    );
    if (!member) throw this.client.lang.INVALID_ARGUMENT(this.options.name);
    return member;
  }
};
