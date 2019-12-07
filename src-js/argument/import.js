const fs = require('fs');

const ignore = ['index.js', 'import.js', 'get.js'];

class ArgumentImport {
  constructor(client) {
    this.arguments = {};

    fs.readdir(__dirname, (err, dir) => {
      if (err) client.logger.error(err);
      dir
        .filter(file => !ignore.includes(file))
        .forEach(file => {
          /* eslint-disable global-require */
          const argument_file = require(`./${file}`);
          const argument = new argument_file(client);
          this.arguments[argument.type] = argument;
        });
      client.arguments = this.arguments;
      client.logger.info('Success import arguments');
    });
  }
}

module.exports = ArgumentImport;
