import { Command, RichEmbed } from '../../../src';

export = class extends Command {
  constructor(client) {
    super(client, { name: 'help', args: { type: 'text' } });
  }

  run(message, { type }) {
    const { commands } = this.client;

    const help = new RichEmbed({ title: 'help' });

    const command = commands[type];
    if (command) {
      help.fields = [
        { name: 'name', value: command.info.name, inline: true },
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

          help.addField(
            commandName,
            command.info.aliases ? command.info.aliases.join() : 'none'
          );
          console.log('a');
        });
    }

    return message.channel.send(help);
  }
};
