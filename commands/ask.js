const Discord = require("discord.js");

var fortunes = [
    "Iya",
    "Kayaknya",
    "Iya banget :)",
    "Enggak",
    "Apaan sih ;v",
    "Waduh..",
    "Orang."
];

exports.run = (bot, message, args) => {
  if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
  else message.channel.send("Usage: .ask (your question)")
};
