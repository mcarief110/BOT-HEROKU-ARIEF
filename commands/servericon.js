const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  let embed = new Discord.RichEmbed()
      .setTitle("Direct Link")
      .setDescription(`**${message.guild.name} Server Icon**`)
      .setImage(message.guild.iconURL)
      .setURL(message.guild.iconURL)
      .setColor("#4286f4")
      .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
  message.channel.send(embed);
};
