import fs from 'fs';
import path from 'path';

import { Client, Command, print, directory } from '../index';

export default class CommandImport {
  commands: { [commandName: string]: Command } = {};
  constructor(client: Client) {
    this.commands = {};

    const directoryPath = directory.getPath('commands');

    directory.exists(directoryPath, client.lang.LOADING_COMMANDS);

    fs.readdirSync(directoryPath).forEach(thatPath => {
      const subDirectoryPath = path.join(directoryPath, thatPath);
      if (!directory.is(subDirectoryPath)) {
        return print.warn(`${client.lang.COMMAND_DIR_FILE_WARN} (${thatPath})`);
      }
      fs.readdirSync(subDirectoryPath)
        .filter(fileName => fileName.match(/\.(?<ext>js|ts)$/u))
        .forEach(fileName => {
          const filePath = path.join(subDirectoryPath, fileName);

          const CommandFile = require(filePath);

          const command = new CommandFile(client);

          const list: string[] = [];

          list.push(command.options.name);

          list.forEach(alias => {
            if (this.commands[alias]) this.commandError(alias);
            this.commands[alias] = command;
            print.import('command', alias, filePath);
          });
        });
    });

    const defaultCommandPath = path.join(__dirname, 'defaults');

    fs.readdirSync(defaultCommandPath).forEach(fileName => {
      const filePath = path.join(defaultCommandPath, fileName);

      const CommandFile = require(filePath);

      const command = new CommandFile(client);

      if (!this.commands[command.options.name]) {
        this.commands[command.options.name] = command;
      }
      print.import('command', command.options.name, 'default');
    });

    client.commands = this.commands;
  }
  commandError(name: string) {
    print.error(
      `Can not create a command with the same name. Duplicate command: "${name}"`
    );
  }
}
