import fs from 'fs';
import path from 'path';

import { print } from '../index';

export default {
  getPath(name: string): string {
    let [, rootPath] = process.argv;
    if (rootPath.match(/\.(?<ext>js|ts)$/u)) {
      rootPath = path.parse(rootPath).dir;
    }
    return path.join(rootPath, name);
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
