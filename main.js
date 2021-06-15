const secrets = require("./conf/secrets.js");
const Discord = require("discord.js");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Botjima Online");
});

client.login(secrets.token);
