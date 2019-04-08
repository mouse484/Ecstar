const Ecstar = require("../src");

const client = new Ecstar.client({
    prefix: ",,",
    log: true,
});

new Ecstar.command({
    
});

client.login(process.env.TOKEN);
