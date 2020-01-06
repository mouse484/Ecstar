import { Client, Message, print } from '../../src';

export const commandRun = (
  client: Client,
  commandName: string,
  message: Message
) => {
  const command = client.commands[commandName];

  if (!command) {
    return print.warn(`Non-existent Command(${commandName})`);
  }

  if (command.info.ownerOnly && client.options.owner !== message.author.id) {
    return message.channel.send('sorry owner only command');
  }

  if (command.info.args) {
    const args = {};
    let count = 1;
    Object.keys(command.info.args).forEach(key => {
      args[key] = message.content.split(' ')[count];
      count = count + 1;
    });
    args["all"] = message.content.split(commandName)[1];
    command.run(message, args);
  } else {
    command.run(message);
  }

  print.command(`${command.info.name} (${commandName})`);
};
