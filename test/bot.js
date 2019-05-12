const Ecstar = require("../src");

const client = new Ecstar.client({
    prefix: ",,",
    command: `${__dirname}/commands/`,
    log: true,
});

client.login(process.env.TOKEN);
