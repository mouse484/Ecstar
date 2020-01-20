import * as fs from 'fs';
import * as path from 'path';

import { Client, Event, print, directory } from '../index';

export default class EventImport {
  events: { [eventName: string]: Event } = {};
  constructor(client: Client) {
    this.events = {};

    const directoryPath = directory.getPath('events');

    try {
      fs.mkdirSync(directoryPath);
    } catch {
      print.info(client.lang.LOADING_EVENTS);
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
