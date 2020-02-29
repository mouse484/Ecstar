import fs from 'fs';
import path from 'path';

import { Client, Command, print, directory } from '../index';

export default class CommandImport {
  commands: { [commandName: string]: Command } = {};
  client: Client;
  directoryPath: string;
  constructor(client: Client) {
    this.commands = {};
    this.client = client;
    this.directoryPath = directory.getPath('commands');

    directory.exists(this.directoryPath, client.lang.LOADING_COMMANDS);

    this.allImport();
    this.defaultImport();

    client.commands = this.commands;
  }
  private importFile(filePath: string, defaultCommand?: boolean) {
    const CommandFile = require(filePath);

    const command = new CommandFile(this.client);

    const list: string[] = [];

    list.push(command.options.name);

    list.forEach(alias => {
      if (this.commands[alias]) this.commandError(alias);
      this.commands[alias] = command;
      print.import('command', alias, defaultCommand ? 'default' : filePath);
    });
  }
  private allImport() {
    fs.readdirSync(this.directoryPath).forEach(thatPath => {
      const subDirectoryPath = path.join(this.directoryPath, thatPath);
      if (!directory.is(subDirectoryPath)) {
        return print.warn(
          `${this.client.lang.COMMAND_DIR_FILE_WARN} (${thatPath})`
        );
      }
      fs.readdirSync(subDirectoryPath)
        .filter(fileName => fileName.match(/\.(?<ext>js|ts)$/u))
        .forEach(fileName => {
          const filePath = path.join(subDirectoryPath, fileName);
          this.importFile(filePath);
        });
    });
  }
  private defaultImport() {
    const defaultCommandPath = path.join(__dirname, 'defaults');

    fs.readdirSync(defaultCommandPath).forEach(fileName => {
      const filePath = path.join(defaultCommandPath, fileName);

      this.importFile(filePath, true);
    });
  }
  commandError(name: string) {
    print.error(
      `Can not create a command with the same name. Duplicate command: "${name}"`
    );
  }
}
