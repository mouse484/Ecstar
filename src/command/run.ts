import { Client, Command, print, ArgsReturn } from 'ecstar';
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
    const parsed = split(message.content, {
      separator: ' ',
      quotes: ['"', "'"],
    });

    Object.keys(command.options.args).forEach(
      (value: string, index: number) => {
        if (command.options.args) {
          const type = command.options.args[value];
          const ArgsParser = async (string: string | undefined) => {
            if (!string) return;
            const parsedArgs = client.args.get(type)?.run(string);
            if (parsedArgs.parsed) {
              args[value] = parsedArgs.parsed;
            } else {
              message.channel.send(
                `${client.lang.WRONG_ARGGUMENT(type)}(${type})`
              );
              const awaitMessage = await message.channel.awaitMessages(
                msg => msg.author.id === message.author.id,
                { max: 1, time: 60000, errors: ['time'] }
              );
              ArgsParser(awaitMessage.first()?.content);
            }
          };
          ArgsParser(parsed[index + 1]);
        }
      }
    );
    command.run(message, args);
  } else {
    command.run(message);
  }

  print.command(`${command.options.name} (${commandName})`);
};
