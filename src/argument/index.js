const fs = require("fs");

class arugment {
    constructor(client, type) {
        if (!client) throw new Error("client is required.");
        if (typeof id !== "string")
            throw new Error("Argument type must be string.");
        if (id !== id.toLowerCase())
            throw new Error("Argument type must be lowercase.");

        this.type = type;
    }
}
