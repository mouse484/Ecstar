import chalk from 'chalk';
const { log } = console;
const { exit } = process;

export default {
  info(args: string) {
    return log(`${chalk.blue('[info]')} ${args}`);
  },
  command(args: string) {
    return log(`${chalk.green('[command]')} ${args}`);
  },
  error(args: string) {
    log(`${chalk.red('[error]')} ${args}`);
    return exit();
  },
  warn(args: string) {
    return log(`${chalk.yellow('[warn]')} ${args}`);
  },
  dev(args: string) {
    return log(`${chalk.black('[dev]')} ${args}`);
  },
};
