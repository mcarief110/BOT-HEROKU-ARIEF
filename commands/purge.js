const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  if (message.member.hasPermission("MANAGE_MESSAGES")){
      message.channel.fetchMessages()
          .then(function(list){
              message.channel.bulkDelete(list);
          }, function(err){
      message.channel.send("Cleared!")
    })};
};
