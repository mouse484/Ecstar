const Ecstar = require("../src");

const client = new Ecstar.client({
    prefix: ",,",
    command: "/workspace/Ecstar/test/commands",
    log: true,
});

client.login(process.env.TOKEN);
