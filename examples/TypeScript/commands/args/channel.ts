import {
  Command,
  Client,
  Message,
  isTextChannel,
  isVoiceChannel,
} from '../../../../src';
import { Channel, MessageEmbed } from 'discord.js';

export = class extends Command {
  constructor(client: Client) {
    super(client, {
      name: 'channel',
      args: { channel: 'channel' },
    });
  }

  run(message: Message, { channel }: { channel: Channel }) {
    const embed = new MessageEmbed();
    if (isTextChannel(channel) || isVoiceChannel(channel)) {
      embed.addField('name', channel.name).addField('type', channel.type);
    }
    return message.channel.send(embed);
  }
};
