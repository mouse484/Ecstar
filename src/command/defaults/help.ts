import { Command } from '../../../src';

export = class extends Command {
  constructor(client) {
    super(client, { name: 'help', args: { type: 'text' } });
  }

  run(message, { type }) {
    const { commands } = this.client;

    let help: string | object = 'help';

    if (type === 'all') {
      // Object.keys(commands)
      //   .filter(commandName => commandName === commands[commandName].info.name)
      //   .forEach(commandName => {
      //     const comand
      //     help[commandName] = { name: commandName }
      //   });
    } else {
      const command = commands[type];
      if (command) {
        help = {
          embed: {
            title: 'help',
            fields: [
              { name: 'name', value: command.info.name, inline: true },
              {
                name: 'alias',
                value: command.info.aliases
                  ? command.info.aliases.join()
                  : 'none',
                inline: true,
              },
            ],
          },
        };
      } else {
        help = 'no command';
      }
    }

    return message.channel.send(help);
  }
};
