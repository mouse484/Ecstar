import { Client, Message, Command, print } from './../index';

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
    let args: { [key: string]: string } = {};
    const parse = message.content
      .split(/(?:(?:"|')([^"']+)(?:"|')|([^ ]+)) ?/)
      .filter((value: string) => value);

    Object.keys(command.options.args).forEach(
      (value: string, index: number) => {
        args[value] = parse[index + 1];
      }
    );
    command.run(message, args);
  } else {
    command.run(message);
  }

  print.command(`${command.options.name} (${commandName})`);
};
