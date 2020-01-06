import { Client, Message, print } from '../../src';

export const commandRun = (client: Client, commandName: string, message: Message) => {
  const command = client.commands[commandName];

  if (!command) {
    return print.warn(`Non-existent Command(${commandName})`);
  }

  if (
    command.info.ownerOnly &&
    client.options.owner !== message.author.id
  ) {
    return message.channel.send('sorry owner only command');
  }

  command.run(message);
  print.command(`${command.info.name} (${commandName})`);
};
