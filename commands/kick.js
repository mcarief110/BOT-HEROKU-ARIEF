const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('You don\'t have permission!'); // Checks permission
  let member = message.mentions.members.first() || message.guild.members.get(args[0]); // Member mention
  if (!member) return message.channel.send('Please mention a member to kick!');
  if (!member.kickable) return message.channel.send('You cannot kick a member with a role higher or equal than you!');
  let reason = args.slice(2).join(' '); // Reason arguments
  if (!reason) return message.channel.send("pls input the reson");

  member.kick(reason)

  let embed = new Discord.RichEmbed() //  RichEmbed constructor
      .setAuthor("Action | Kick", member.user.displayAvatarURL)
      .addField("Username", member.user.tag, true)
      .addField("Reason", `${reason}`, true)
      .addField("Moderator", `<@${message.author.id}>`, true)
      .setColor("#4286f4")
      .setTimestamp()
      .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
  message.channel.send(embed);
};
