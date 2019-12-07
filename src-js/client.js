const Discord = require('discord.js');

const Logger = require('./lib/logger.js');

const Dispatcher = require('./lib/dispatcher.js');

const CommandImport = require('./command/import.js');
const ArgumenrImport = require('./argument/import.js');
const EventImport = require('./event/import.js');

const propagate = require('propagate');
const EventEmitter2 = require('eventemitter2');

const client = new EventEmitter2({ wildcard: true });

class EcstarClient extends Discord.Client {
  constructor(options = {}) {
    super(options);

    this.logger = new Logger();
    this.dispatcher = new Dispatcher(this);

    propagate(this, client);

    const that = this;

    client.on('*', function ClientEvents(callback) {
      /* eslint-disable no-invalid-this */
      that.dispatcher.event(this.event, callback);
    });
  }

  imports() {
    new Promise(async resolve => {
      await new CommandImport(this);
      await new ArgumenrImport(this);
      await new EventImport(this);

      resolve();
    });
  }

  async login(token) {
    this.logger.info('Ready...');

    await this.imports();

    return super.login(token);
  }
}

module.exports = EcstarClient;
