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
    const args: string[] = [];
    const splitedMessage = split(message.content, {
      separator: ' ',
      quotes: ['"', "'"],
    });

    try {
      for (const [index, type] of command.options.args.entries()) {
        const perse = async (string: string | undefined): Promise<string> => {
          try {
            if (!string) throw client.lang.MISSING_ARGUMENT;
            return client.args.get(type)?.run(string);
          } catch (error) {
            if (typeof error !== 'string') throw error;

            (
              await message.channel.send(
                client.lang.WRONG_ARGGUMENT(type, error)
              )
            ).delete({ timeout: 10000 });

            const collected = await message.channel
              .awaitMessages((msg) => msg.author.id === message.author.id, {
                max: 1,
                time: 10000,
                errors: ['time'],
              })
              .catch((error) => {
                throw client.lang.TIME_OUT_ARGUMENT;
              });

            return perse(collected.first()?.content);
          }
        };

        args.push(await perse(splitedMessage[index + 1]));

        command.run(message, args);
      }
    } catch (error) {
      if (error === client.lang.TIME_OUT_ARGUMENT) {
        (await message.channel.send(client.lang.TIME_OUT_ARGUMENT)).delete({
          timeout: 5000,
        });
      } else {
        print.error(error);
      }
    }
  } else {
    command.run(message);
  }

  print.command(`${command.options.name} (${commandName})`);
};
