const Ecstar = require("../../src/");

const options = {
    prefix: "e!",
};

const client = new Ecstar.Client(options);

client.login(process.env.TOKEN);
