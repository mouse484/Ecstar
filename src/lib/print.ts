import chalk from 'chalk';
import figures from 'figures';
const { exit } = process;

const log = (type: string, ...args: string[]): void => {
  console.log(`${new Date().toLocaleTimeString()} | ${type}\t${args}`);
};

export class print {
  static info(args: string): void {
    return log(chalk.blue(figures.info, 'info'), args);
  }
  static store(
    storetype: 'commands' | 'events',
    type: 'import' | 'update',
    name: string,
    path: string
  ): void {
    const list = {
      import: figures.circleCircle,
      update: figures.circleDotted,
    };
    return log(
      chalk.magenta(list[type], type),
      `${storetype} : ${name} ${chalk.gray(path)}`
    );
  }
  static command(args: string): void {
    return log(chalk.green(figures.play, 'command'), args);
  }
  static error(args: string): void {
    log(chalk.red(figures.cross, 'error'), args);
    return exit();
  }
  static warn(args: string): void {
    return log(chalk.yellow(figures.warning, 'warn'), args);
  }
}
