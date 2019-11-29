import * as fs from "fs";

// import * as path from "path";
import directory from "../lib/directory";
import print from "../lib/print";

export default () => {
    const directory_path = directory.get("commands");

    try {
        fs.mkdirSync(directory_path);
    } catch {
        print.info("Loading command...");
    }
    fs.readdirSync(directory_path).forEach(that_path =>
        directory.is(that_path)
    );
};
