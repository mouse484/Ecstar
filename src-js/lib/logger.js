const chalk = require('chalk');

const { log } = console;

const { exit } = process;

class Logger {
  info(args) {
    return log(`${chalk.blue('[info]')} ${args}`);
  }

  command(args) {
    return log(`${chalk.green('[command]')} ${args}`);
  }

  error(args) {
    log(`${chalk.red('[error]')} ${args}`);
    return exit();
  }

  warn(args) {
    return log(`${chalk.yellow('[warn]')} ${args}`);
  }
}

module.exports = Logger;