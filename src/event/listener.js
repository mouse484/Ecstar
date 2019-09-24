class EventListener {
    constructor(client, events, callback) {
        this.client = client;
        if (!client.on) return;
        events.forEach(event => {
            emitter.on(event.name, callback)
        });
    }
}