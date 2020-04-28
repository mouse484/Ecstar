import { Command, Client, isNamedChannel } from '../../../../src';
import { Channel, Message, MessageEmbed } from 'discord.js';

export = class extends Command {
  constructor(client: Client) {
    super(client, {
      name: 'channel',
      args: ['channel'],
    });
  }

  run(message: Message, [channel]: [Channel]) {
    const embed = new MessageEmbed().addField('type', channel.type);
    if (isNamedChannel(channel)) {
      embed.addField('name', channel.name);
    }
    return message.channel.send(embed);
  }
};
