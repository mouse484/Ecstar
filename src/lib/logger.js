const chalk = require("chalk");

const log = console.log;

class logger {
    info(args) {
        return log(`${chalk.blue("[info]")} ${args}`);
    }
    command(args) {
        return log(`${chalk.green("[command]")} ${args}`);
    }
    error(args) {
        return log(`${chalk.red("[error]")} ${args}`);
    }
    warn(args) {
        return log(`${chalk.yellow("[warn]")} ${args}`);
    }
}

module.exports = logger;