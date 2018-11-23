const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  let embed = new Discord.RichEmbed()
      .setAuthor(`${bot.user.username} Info`, bot.user.displayAvatarURL)
      .addField("Bot Owner", "GorutoCraftYT#4907", true)
      .addField("Bot ID", bot.user.id, true)
      .addField("Created At", bot.user.createdAt, true)
      .addField("Lib", "discord.js", true)
      .addField("Prefix", "z;", true)
      .setThumbnail(bot.user.displayAvatarURL)
      .setColor("#4286f4")
      .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
  message.channel.send(embed);
};
