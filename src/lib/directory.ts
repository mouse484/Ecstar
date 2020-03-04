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
    const thatDir = path.join(rootDir, name);
    this.exists(thatDir);
    return thatDir;
  },
  exists(directoryPath: string, message?: string): void {
    try {
      fs.mkdirSync(directoryPath);
    } catch {}
  },
  is(directoryPath: string): boolean {
    return fs.statSync(directoryPath).isDirectory();
  },
};
