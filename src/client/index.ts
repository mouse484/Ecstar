import { Client } from "discord.js";

import * as EventPropagate from "propagate";
import { EventEmitter2 } from "eventemitter2";

const client = new EventEmitter2({ wildcard: true });

import imports from "../lib/imports";
import Dispatcher from "../lib/dispatcher";

export default class extends Client {
    constructor(options: object) {
        super(options);

        EventPropagate(this, client);

        imports();

        const dispatcher = new Dispatcher(this);

        client.on("*", function ClientEvents(callback) {
            dispatcher.event(this.event, callback);
        });
    }
}
