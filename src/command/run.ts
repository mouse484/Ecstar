import { Client, Message, Command, print } from './../index';

export const commandRun = (
  client: Client,
  commandName: string,
  message: Message
) => {
  const command: Command = client.commands[commandName];

  if (!command) {
    return print.warn(`Non-existent Command(${commandName})`);
  }

  if (command.info.ownerOnly && client.options.owner !== message.author.id) {
    return message.channel.send('sorry owner only command');
  }

  if (command.info.guildOnly && !message.guild) {
    return message.channel.send('this command is guil only.');
  }

  if (command.info.args) {
    let args: { [key: string]: string } = {};
    let count = 1;
    Object.keys(command.info.args).forEach(key => {
      args[key] = message.content.split(' ')[count];
      count = count + 1;
    });
    args = {
      ...args,
      all: message.content.split(commandName)[1],
    };

    command.run(message, args);
  } else {
    command.run(message);
  }

  print.command(`${command.info.name} (${commandName})`);
};
