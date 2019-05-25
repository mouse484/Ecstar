class command_error {
    constructor(reason) {
        this.status = { status: "error", reason };
        return this.status;
    }
}
module.exports = command_error;
