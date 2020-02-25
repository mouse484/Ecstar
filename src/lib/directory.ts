import fs from 'fs';
import path from 'path';

import { print } from '../index';

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
  getPath(name: string): string {
    const rootPath = require.main.filename;
    const rootDir = path.dirname(rootPath);
    return path.join(rootDir, name);
  },
  exists(directoryPath: string, message: string): void {
    try {
      fs.mkdirSync(directoryPath);
    } catch {
      print.info(message);
    }
  },
  is(directoryPath: string): boolean {
    return fs.statSync(directoryPath).isDirectory();
  },
};
