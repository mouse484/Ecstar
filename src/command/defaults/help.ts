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
        { name: 'name', value: command.info.name, inline: true },
        {
          name: 'description',
          value: command.info.description ? command.info.description : 'none',
        },
        {
          name: 'alias',
          value: command.info.aliases ? command.info.aliases.join() : 'none',
          inline: true,
        },
      ];
    } else {
      Object.keys(commands)
        .filter(commandName => commandName === commands[commandName].info.name)
        .forEach(commandName => {
          const command = commands[commandName];

          let commandInfo = '';

          if (command.info.aliases) {
            commandInfo += `alias: ${command.info.aliases.join()}`;
          }
          if (command.info.description) {
            commandInfo += `description: ${command.info.description}`;
          }
          if (!commandInfo) commandInfo = '-';

          help.addField(this.client.options.prefix + commandName, commandInfo);
        });
    }

    return message.channel.send(help);
  }
};
