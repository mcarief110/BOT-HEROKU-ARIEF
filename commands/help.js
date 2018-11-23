const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  let embed = new Discord.RichEmbed()
      .setAuthor(`${bot.user.username} Command List`, bot.user.displayAvatarURL)
      .setThumbnail(bot.user.displayAvatarURL)
      .addField("General:", "`g,help | g,helphere | g,ping | g,invite | g,uptime | g,weather <city>`")
      .addField("Fun:", "`g,ask <question> | g,discosheep`")
      .addField("Moderation:", "`g,kick <@user> <reason> | g,purge | g,ban | g,addrole | g,removerole | g,report | g,mute (coming soon) | g,unmute (coming soon) g,warn (coming soon)`")
      .addField("Info", "`g,servericon | g,serverinfo | g,useravatar <@user> | g,userinfo <@user> | g,botstats | g,botinfo | g,uptime`")
      .addField("Text", "`g,say <text> | g,sayembed <text> | g,asciiart <text>`")
      .setColor("#4286f4")
      .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
      message.author.send(embed);

  message.channel.send(":incoming_envelope: Sending help message to your DM!")
};
