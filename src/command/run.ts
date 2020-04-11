import { Client, Command, print } from 'ecstar';
import { Message } from 'discord.js';
import split from 'split-string';

export const commandRun = async (
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

    for (const [index, value] of command.options.args.entries()) {
      const perse = async (string: string | undefined): Promise<string> => {
        const parsed = string && client.args.get(value.type)?.run(string);
        if (parsed) return parsed;
        message.channel.send(
          `${client.lang.WRONG_ARGGUMENT(value.type)}(${value.type})`
        );
        const collected = await message.channel.awaitMessages(
          (msg) => msg.author.id === message.author.id,
          { max: 1, time: 60000, errors: ['time'] }
        );
        return perse(collected.first()?.content);
      };
      args[value.name] = await perse(splitedMessage[index + 1]);
    }

    console.log(args)

    command.run(message, args);
  } else {
    command.run(message);
  }

  print.command(`${command.options.name} (${commandName})`);
};
