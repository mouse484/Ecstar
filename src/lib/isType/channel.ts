import { Channel, TextChannel, VoiceChannel } from 'discord.js';



export const isTextChannel = (channel: Channel): channel is TextChannel => {
  return channel.type === 'text';
};

export const isVoiceChannel = (channel: Channel): channel is VoiceChannel => {
  return channel.type === 'voice';
};
