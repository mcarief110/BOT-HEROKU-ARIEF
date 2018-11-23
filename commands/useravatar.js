const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  let user = message.mentions.users.first() || message.author
  let embed = new Discord.RichEmbed()
      .setAuthor(`**${user.tag} User Avatar**`)
      .setTitle("Direct Link")
      .setImage(user.displayAvatarURL)
      .setURL(user.displayAvatarURL)
      .setColor("#4286f4")
      .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
  message.channel.send(embed);
};
