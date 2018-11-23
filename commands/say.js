const DIscord = require("discord.js");

exports.run = (bot, message, args) => {
  let arggs = message.content.split(" ").slice(1);

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("u dont have permiss");
  if (!arggs) return message.channel.send("pls insert some text")

  message.delete()
  message.channel.sendMessage(arggs.join(" "))
};
