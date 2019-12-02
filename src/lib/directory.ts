import * as fs from "fs";
import * as path from "path";

export default {
    get(name: string) {
        let root_path = process.argv[1];
        if (root_path.match(/\.(?<ext>js|ts)$/u)) {
            root_path = path.parse(root_path).dir;
        }
        return path.join(root_path, name);
    },
    is(directory_path: string) {
        return fs.statSync(directory_path).isDirectory();
    },
};
