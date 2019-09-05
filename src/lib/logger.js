const chalk = require("chalk");

const log = console.log;

class logger {
    info(args) {
        return log(`${chalk.blue("[info]")} ${args}`);
    }
}

module.exports = logger;