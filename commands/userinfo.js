const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  let user = message.mentions.users.first() || message.author
  let embed = new Discord.RichEmbed()
      .setAuthor(`${user.tag} info`, user.displayAvatarURL)
      .addField("Username", user.username, true)
      .addField("Status", user.presence.status, true)
      .addField("Bot Account", user.bot, true)
      .addField("ID", user.id, true)
      .addField("Created On", user.createdAt, true)
      .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
      .setThumbnail(user.displayAvatarURL)
      .setColor("#4286f4")
  message.channel.send(embed);
};
