import chalk from "chalk";
const log = console.log;
const exit = process.exit;

export const info = (args: any) => {
    return log(`${chalk.blue("[info]")} ${args}`);
}
export const command = (args: any) => {
    return log(`${chalk.green("[command]")} ${args}`);
}

export const error = (args: any) => {
    log(`${chalk.red("[error]")} ${args}`);
    return exit();
}

export const warn = (args: any) => {
    return log(`${chalk.yellow("[warn]")} ${args}`);
}
