import fs from 'fs';
import path from 'path';

import { print, Client } from '../index';

interface oRequire extends NodeJS.Require {
  main: any;
}

interface Require extends oRequire {
  main: {
    filename: string;
  };
}

declare let require: Require;

export default {
  getPath(client: Client, name: string): string {
    const rootPath = require.main.filename;
    const rootDir = path.dirname(rootPath);
    const thatDir = path.join(rootDir, name);
    try {
      fs.mkdirSync(thatDir);
    } catch {
      print.info(client.lang.LOADING(name));
    }
    return thatDir;
  },
  is(directoryPath: string): boolean {
    return fs.statSync(directoryPath).isDirectory();
  },
};
