const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  let argss = message.content.split(" ").slice(1);

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("u dont have permiss");

      message.delete()
      var embed = new Discord.RichEmbed()
          .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
          .setDescription(argss.join(" "))
          .setColor("#4286f4")
          .setTimestamp()  //.setFooter(new Date)
          .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
          message.channel.sendEmbed(embed);
};
