import * as print from "../lib/print";

export default (client: any, name: string, callback: any) => {
    switch (name) {
        case "ready":
            print.info(`Go!! ${client.user.tag}`);
            break;
        case "message":
            break;
        default:
            break;
    }
}
