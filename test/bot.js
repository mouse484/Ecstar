const Ecstar = require("../src");

const client = new Ecstar.client({
    prefix: ",,",
    log: true,
});

client.login(process.env.TOKEN);
