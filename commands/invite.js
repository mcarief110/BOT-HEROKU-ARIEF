const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  let embed = new Discord.RichEmbed()
      .setTitle("Links!")
      .setDescription("[Invite me!](https://discordapp.com/oauth2/authorize?client_id=504203566068793356&scope=bot&permissions=230713382) \n[Join our server](https://discord.gg/VfK72A)")
      .setThumbnail(bot.user.displayAvatarURL)
      .addField("Joined Servers", bot.guilds.size)
      .setColor("#4286f4")
      .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
  message.channel.send(embed);
};
