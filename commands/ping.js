const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  let API = (bot.ping).toFixed(2)

  let embed = new Discord.RichEmbed()
     .setTitle(`:ping_pong: Pong!`)
     .setColor("#4286f4")
     .addField("API", `${API}ms`, true)
  message.channel.send(embed);
};
