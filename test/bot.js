const Ecstar = require("../src");

const client = new Ecstar.client({
    prefix: ",,",
}).login(process.env.TOKEN);
