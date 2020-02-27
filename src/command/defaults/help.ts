import { Client, Command, Message, RichEmbed } from '../../index';

export = class extends Command {
  constructor(client: Client) {
    super(client, { name: 'help', args: { type: 'text' } });
  }

  run(message: Message, { type }: { type: string }) {
    const { commands }: { commands: { [key: string]: Command } } = this.client;

    const help = new RichEmbed({
      title: 'help',
      description: `this bot prefix is \`${this.client.options.prefix}\``,
    });

    const command = commands[type];
    if (command) {
      help.fields = [
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
      ];
    } else {
      Object.keys(commands)
        .filter(
          commandName => commandName === commands[commandName].options.name
        )
        .forEach(commandName => {
          const command = commands[commandName];

          let commandInfo = '';

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
