import fs from 'fs';
import path from 'path';

export class directory {
  static getPath(name: string): string | undefined {
    const rootPath = require.main?.filename;
    if (!rootPath) return undefined;
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
  }
  static is(directoryPath: string): boolean {
    return fs.statSync(directoryPath).isDirectory();
  }
}
