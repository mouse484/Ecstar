import fs from 'fs';
import path from 'path';

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
  getPath(name: string): string | undefined {
    const rootPath = require.main.filename;
    const rootDir = path.dirname(rootPath);
    const thatDir = path.join(rootDir, name);
    try {
      fs.mkdirSync(thatDir);
      if (this.is(thatDir)) {
        return thatDir;
      }
      return undefined;
    } catch {
      return thatDir;
    }
  },
  is(directoryPath: string): boolean {
    return fs.statSync(directoryPath).isDirectory();
  },
};
