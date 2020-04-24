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
    return print.warn(client.lang.NON_EXISTENT_COMMAND(commandName));
  }

  if (command.options.ownerOnly && client.options.owner !== message.author.id) {
    return message.channel.send(client.lang.COMMAND.OWNER_ONLY);
  }

  if (command.options.guildOnly && !message.guild) {
    return message.channel.send(client.lang.COMMAND.GUILD_ONLY);
  }

  if (command.options.args) {
    const args: string[] = [];
    const splitedMessage = split(message.content, {
      separator: ' ',
      quotes: ['"', "'"],
    });
    const commandArgs = command.options.args.map((argsOption) => {
      if (typeof argsOption === 'string') return { type: argsOption };
      return argsOption;
    });

    try {
      for (const [index, option] of commandArgs.entries()) {
        const perse = async (string: string | undefined): Promise<string> => {
          try {
            if (!string) {
              if (option.optional) return '';
              throw client.lang.MISSING_ARGUMENT;
            }
            return client.args.get(option.type)?.run(message, string);
          } catch (error) {
            if (typeof error !== 'string') throw error;

            (
              await message.channel.send(
                client.lang.WRONG_ARGGUMENT(option.type, error)
              )
            ).delete({ timeout: 10000 });

            const collected = await message.channel
              .awaitMessages((msg) => msg.author.id === message.author.id, {
                max: 1,
                time: 10000,
                errors: ['time'],
              })
              .catch(() => {
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
