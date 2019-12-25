import chalk from 'chalk';
import figures from 'figures';
const { exit } = process;

const log = (args: string) => {
  console.log(`${new Date().toLocaleTimeString()}  ${args}`);
};

export = {
  info(args: string) {
    return log(chalk`{blue ${figures.info} info} ${args}`);
  },
  import(type: 'command', name: string, path: string) {
    return log(
      chalk`{magenta ${figures.circleCircle} import} ${name} {gray ${path}}`
    );
  },
  command(args: string) {
    return log(`${chalk.green('[command]')} ${args} `);
  },
  error(args: string) {
    log(`${chalk.red('[error]')} ${args} `);
    return exit();
  },
  warn(args: string) {
    return log(`${chalk.yellow('[warn]')} ${args} `);
  },
  dev(args: string) {
    return log(`${chalk.black('[dev]')} ${args} `);
  },
};
