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
        log(`${chalk.red("[error]")} ${args}`);
        return process.exit(0);
    }

    warn(args) {
        return log(`${chalk.yellow("[warn]")} ${args}`);
    }
}

module.exports = logger;
