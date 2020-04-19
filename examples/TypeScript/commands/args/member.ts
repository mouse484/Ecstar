import { Command, Client } from '../../../../src';
import { GuildMember, Message, MessageEmbed } from 'discord.js';

export = class extends Command {
  constructor(client: Client) {
    super(client, {
      name: 'member',
      args: ['member'],
    });
  }

  run(message: Message, [member]: [GuildMember]) {
    const embed = new MessageEmbed()
      .setThumbnail(member.user.avatarURL() || '')
      .addField('name', member.user.username)
      .addField('Joined At', member.joinedAt);

    return message.channel.send(embed);
  }
};
