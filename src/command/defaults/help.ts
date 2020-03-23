import { Client, Command, Message } from '../../index';
import { MessageEmbed } from 'discord.js';

export = class extends Command {
  constructor(client: Client) {
    super(client, { name: 'help', args: { type: 'text' } });
  }

  run(message: Message, { type }: { type: string }) {
    const { commands }: { commands: Map<string, Command> } = this.client;

    const help = new MessageEmbed({
      title: 'help',
      description: `this bot prefix is \`${this.client.options.prefix}\``,
    });

    const command = commands.get(type);
    if (command) {
      help.addFields([
        { name: 'name', value: command.options.name, inline: true },
        {
          name: 'description',
          value: command.options.description
            ? command.options.description
            : 'none',
        },
        {
          name: 'alias',
          value: command.options.aliases
            ? command.options.aliases.join()
            : 'none',
          inline: true,
        },
      ]);
    } else {
      Object.keys(commands)
        .filter(
          (commandName) =>
            commandName === commands.get(commandName)?.options.name
        )
        .forEach((commandName) => {
          const command = commands.get(commandName);

          let commandInfo = '';

          if (!command) return;

          if (command.options.aliases) {
            commandInfo += `alias: ${command.options.aliases.join()}`;
          }
          if (command.options.description) {
            commandInfo += `description: ${command.options.description}`;
          }
          if (!commandInfo) commandInfo = '-';

          help.addField(this.client.options.prefix + commandName, commandInfo);
        });
    }

    return message.channel.send(help);
  }
};
