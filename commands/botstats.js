const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  let embed = new Discord.RichEmbed()
      .setAuthor(`${bot.user.username} Stats`)
      .setDescription("Stats of the bot")
      .addField("Server", bot.guilds.size)
      .addField("Channel", bot.channels.size)
      .addField("User", bot.users.size)
      .setColor("#4286f4")
      .setThumbnail(bot.user.displayAvatarURL)
      .setFooter(`Bot Created By GorutoCraftYT#4907`, bot.user.displayAvatarURL)
  message.channel.send(embed);
};
