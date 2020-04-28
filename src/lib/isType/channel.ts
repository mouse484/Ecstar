import {
  Channel,
  DMChannel,
  TextChannel,
  VoiceChannel,
  CategoryChannel,
  NewsChannel,
  StoreChannel,
} from 'discord.js';

interface NamedChannel extends Channel {
  name: string;
}

export const isNamedChannel = (channel: Channel): channel is NamedChannel => {
  return ['text', 'voice', 'category', 'news', 'store'].includes(channel.type);
};

export const isDMChannel = (channel: Channel): channel is DMChannel => {
  return channel.type === 'dm';
};

export const isTextChannel = (channel: Channel): channel is TextChannel => {
  return channel.type === 'text';
};

export const isVoiceChannel = (channel: Channel): channel is VoiceChannel => {
  return channel.type === 'voice';
};

export const isCategoryChannel = (
  channel: Channel
): channel is CategoryChannel => {
  return channel.type === 'category';
};

export const isNewsChannel = (channel: Channel): channel is NewsChannel => {
  return channel.type === 'news';
};

export const isStoreChannel = (channel: Channel): channel is StoreChannel => {
  return channel.type === 'store';
};
