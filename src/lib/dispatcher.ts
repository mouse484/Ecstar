import Event from "../event";

export default class Dispatcher {
    private client: any;
    constructor(client: any) {
        this.client = client;
    }
    event(name: string, callback: any) {
        Event(this.client, name, callback);
    }
}