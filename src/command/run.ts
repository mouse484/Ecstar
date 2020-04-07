import { Client, Command, print } from 'ecstar';
import { Message } from 'discord.js';
import split from 'split-string';

export const commandRun = (
  client: Client,
  commandName: string,
  message: Message
) => {
  const command: Command | undefined = client.commands.get(commandName);

  if (!command) {
    return print.warn(`Non-existent Command(${commandName})`);
  }

  if (command.options.ownerOnly && client.options.owner !== message.author.id) {
    return message.channel.send('sorry owner only command');
  }

  if (command.options.guildOnly && !message.guild) {
    return message.channel.send('this command is guil only.');
  }

  if (command.options.args) {
    const args: { [key: string]: string } = {};
    const splitedMessage = split(message.content, {
      separator: ' ',
      quotes: ['"', "'"],
    });

    Object.keys(command.options.args).forEach((argsName, index) => {
      if (!command.options.args) return;
      const argsType = command.options.args[argsName];

      args[argsName] = client.args
        .get(argsType)
        ?.run(splitedMessage[index + 1]);
    });

    command.run(message, args);
  } else {
    command.run(message);
  }

  print.command(`${command.options.name} (${commandName})`);
};
