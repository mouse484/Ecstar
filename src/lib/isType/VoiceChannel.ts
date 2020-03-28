import { Channel, VoiceChannel } from 'discord.js';

export const isVoiceChannel = (channel: Channel): channel is VoiceChannel => {
  return channel.type === 'voice';
};
