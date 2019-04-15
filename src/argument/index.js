class argument {
    constructor(client, type) {
        if (!client) throw new Error("client is required.");
        if (typeof type !== "string")
            throw new Error("Argument type must be string.");
        if (type !== type.toLowerCase())
            throw new Error("Argument type must be lowercase.");

        this.type = type;
    }
}

module.exports = argument;
