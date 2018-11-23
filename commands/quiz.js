const Discord = require('discord.js');

const quiz = [
  { q: "Kalo lapar ngapain?", a: ["makan"] }, 
  { q: "Kalo ngantuk ngapain?", a: ["tidur"] },
  { q: "Gajah terbang keliatan?", a: ["boongnya"] }
];

const options = { 
  max: 1,
  time: 30050,
  errors: ["time"],
};

exports.run = async(bot, message, args) => {

const item = quiz[Math.floor(Math.random() * quiz.length)];
await message.channel.send("Loading question..")
await message.channel.send(item.q);

try {

const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
const winnerMessage = collected.first();

return message.channel.send({embed: new Discord.RichEmbed()
.setAuthor(`Winner: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
.setTitle(`Correct Answer: ${winnerMessage.content}`)
.setFooter(`Question: ${item.q}`)
.setColor(message.guild.me.displayHexColor)

  })

} catch (_) {

return message.channel.send({embed: new Discord.RichEmbed()
.setAuthor('No one got the answer in time!')
.setTitle(`Correct Answer(s): \`${item.a}\``)
.setFooter(`Question: ${item.q}`)

    })
  }
}