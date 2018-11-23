const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  let embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField("Server Name", message.guild.name, true)
      .addField("Server Owner", `<@${message.guild.ownerID}>`, true)
      .addField("Member Count", message.guild.memberCount, true)
      .addField("Roles", message.guild.roles.size, true)
      .addField("Channels", message.guild.channels.size, true)
      .addField("Server Region", message.guild.region, true)
      .addField("Server ID", message.guild.id, true)
      .addField("Created On", message.guild.createdAt, true)
      .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
      .setThumbnail(message.guild.iconURL)
      .setColor("#4286f4")
  message.channel.send(embed);
};
