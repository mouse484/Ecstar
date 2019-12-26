import chalk from 'chalk';
import figures from 'figures';
const { exit } = process;

const log = (type: string, ...args: string[]) => {
  console.log(`${new Date().toLocaleTimeString()} | ${type}\t${args}`);
};

export = {
  info(args: string) {
    return log(chalk.blue(figures.info, 'info'), args);
  },
  import(type: 'command', name: string, path: string) {
    return log(
      chalk.magenta(figures.circleCircle, 'import'),
      name,
      chalk.gray(path)
    );
  },
  command(args: string) {
    return log(chalk.green(figures.play, 'command'), args);
  },
  error(args: string) {
    log(chalk.red(figures.cross, 'error'), args);
    return exit();
  },
  warn(args: string) {
    return log(chalk.yellow(figures.warning, 'warn'), args);
  },
};
