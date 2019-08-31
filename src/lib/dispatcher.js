class dispatcher{
    constructor(client) {
        this = client;
    }
    messageHandle(message) {
        if (!this.messageCheck(message)) return;
    }
    messageCheck(message) {
        if (message.author.bot) return false;
        return true;
    }
}