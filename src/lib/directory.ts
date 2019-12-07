import * as fs from 'fs';
import * as path from 'path';

export default {
  get(name: string) {
    let [, rootPath] = process.argv;
    if (rootPath.match(/\.(?<ext>js|ts)$/u)) {
      rootPath = path.parse(rootPath).dir;
    }
    return path.join(rootPath, name);
  },
  is(directoryPath: string) {
    return fs.statSync(directoryPath).isDirectory();
  },
};
