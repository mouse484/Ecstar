import { Client, Message, Command, print } from './../index';
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
          args[value] = client.args
            .get(command.options.args[value])
            ?.run(parsed[index + 1]);
        }
      }
    );
    command.run(message, args);
  } else {
    command.run(message);
  }

  print.command(`${command.options.name} (${commandName})`);
};
