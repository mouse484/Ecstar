import chalk from "chalk";
const log = console.log;
const exit = process.exit;

export const info = (args: string) => {
    return log(`${chalk.blue("[info]")} ${args}`);
};
export const command = (args: string) => {
    return log(`${chalk.green("[command]")} ${args}`);
};

export const error = (args: string) => {
    log(`${chalk.red("[error]")} ${args}`);
    return exit();
};

export const warn = (args: string) => {
    return log(`${chalk.yellow("[warn]")} ${args}`);
};
