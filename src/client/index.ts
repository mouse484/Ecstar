import { Client } from "discord.js";

import EventPropagate from "propagate";
import { EventEmitter2 } from "eventemitter2";

const client = new EventEmitter2({ wildcard: true });

import imports from "../lib/imports";
import Dispatcher from "../lib/dispatcher";

export default class EcstarClient extends Client {
    constructor(options: object) {
        super(options);

        EventPropagate(this, client);

        new imports(this);

        const dispatcher = new Dispatcher(this);

        client.on("*", function ClientEvents(callback) {
            dispatcher.event(this.event, callback);
        });
    }
}
