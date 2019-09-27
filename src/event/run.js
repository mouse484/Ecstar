class EventRun {
    constructor(client) {
        this.client = client;
    }

    run(name, callback) {
        if (!this.client.readyAt) return;
        const event = this.client.events[name];

        if (!event) return;
        event.run(callback);
    }
}

module.exports = EventRun;
