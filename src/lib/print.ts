import chalk from 'chalk';
import figures from 'figures';
const { exit } = process;

const log = (type: string, ...args: string[]): void => {
  console.log(`${new Date().toLocaleTimeString()} | ${type}\t${args}`);
};

export default {
  info(args: string): void {
    return log(chalk.blue(figures.info, 'info'), args);
  },
  import(type: 'command' | 'event', name: string, path: string): void {
    return log(
      chalk.magenta(figures.circleCircle, 'import'),
      `${type} : ${name} ${chalk.gray(path)}`
    );
  },
  command(args: string): void {
    return log(chalk.green(figures.play, 'command'), args);
  },
  error(args: string): void {
    log(chalk.red(figures.cross, 'error'), args);
    return exit();
  },
  warn(args: string): void {
    return log(chalk.yellow(figures.warning, 'warn'), args);
  },
};
