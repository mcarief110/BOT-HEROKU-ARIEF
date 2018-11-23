const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  let embed = new Discord.RichEmbed()
      .setTitle("Disco Sheep!")
      .setDescription("[Direct link](https://cdn.discordapp.com/attachments/469543587344809984/499887002532184085/Disco_sheep_by_lockrikard-d6xo4oa.gif)")
      .setImage("https://cdn.discordapp.com/attachments/469543587344809984/499887002532184085/Disco_sheep_by_lockrikard-d6xo4oa.gif")
      .setColor("#4286f4")
      .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
  message.channel.send(embed);
};
