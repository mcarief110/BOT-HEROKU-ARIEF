const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  let embed = new Discord.RichEmbed()
      .setAuthor(`${bot.user.username} Command List`, bot.user.displayAvatarURL)
      .setThumbnail(bot.user.displayAvatarURL)
      .addField("General:", "`z;help | z;ping | z;invite | z;uptime | z;weather <city>`")
      .addField("Fun:", "`z;ask <question> | z;discosheep`")
      .addField("Moderation:", "`z;kick <@user> <reason> | z;purge | z;ban (coming soon) | z;mute (coming soon) | z;unmute (coming soon) z;warn (coming soon)`")
      .addField("Info", "`z;servericon | z;serverinfo | z;useravatar <@user> | z;userinfo <@user> | z;botstats | z;botinfo | z;uptime`")
      .addField("Text", "`z;say <text> | z;sayembed <text> | z;asciiart <text>`")
      .setColor("#4286f4")
      .setFooter("Bot Created By Alvzz#6263", bot.user.displayAvatarURL)
  message.channel.send(embed);
};