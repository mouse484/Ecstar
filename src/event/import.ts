import * as fs from 'fs';
import * as path from 'path';

import directory from '../lib/directory';
import print from '../lib/print';

import { Client, Event } from '../../src';

export default class EventImport {
  events: Event[];
  constructor(client: Client) {
    this.events = [];

    const directoryPath = directory.get('events');

    try {
      fs.mkdirSync(directoryPath);
    } catch {
      print.info('Loading events...');
    }

    fs.readdirSync(directoryPath)
      .filter(fileName => fileName.match(/\.(?<ext>js|ts)$/u))
      .forEach(fileName => {
        const filePath = path.join(directoryPath, fileName);

        const EventFile = require(filePath);

        const event = new EventFile(client);

        if (!this.events[event.name]) {
          this.events[event.name] = event;
          print.import('event', event.name, filePath);
        }
      });
    client.events = this.events;
  }
}
