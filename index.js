var express = require('express');
var http = require('http');
var app = express();

// Glitch Ping
app.use(express.static('public'));
// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
    response.sendStatus(200);
  });

// Request Listener
var listener = app.listen(process.env.PORT, function() {
  console.log('This App Is Listening To Port: ' + listener.address().port);
});
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const TOKEN = process.env.BOT_TOKEN
const PREFIX = process.env.BOT_PREFIX

var bot = new Discord.Client()

function changing_status() {
  let status = [`Say g,help || Released Now!`, `With ${client.users.size} Users`, `With ${client.guilds.size} Server`, `With ${client.channels.size} Channels`, `24/7 Online Forever`, `Hosted In Heroku`]
  let random = status[Math.floor(Math.random() * status.length)]
  client.user.setActivity(random)
}

client.on('ready', () => {
  console.log(`${client.user.tag} Bot Has Online Now With Player Using ${client.users.size} Users And Using ${client.channels.size} Channels And ${client.guilds.size} Servers!`);
  client.user.setStatus('dnd');
  setInterval(changing_status, 9000);
})

client.on("guildMemberAdd", async member => {
  let autoRole = await db.fetch(`autorole_${member.guild.id}`).catch(err => console.log(err));
  let autorole = member.guild.roles.find('name', autoRole);
  member.addRole(autorole);
  let welcomechannel = member.guild.channels.find(`name`, "💬welcome-goodbye💬");
  welcomechannel.send(`${member} Has Joined The Our Discord Server`);
})

client.on("guildMemberRemove", async member => {
  console.log(`${member.id} Has Leaved The Discord Server`);

  let welcomechannel = member.guild.channels.find(`name`, "💬welcome-goodbye💬");
  welcomechannel.send(`${member} Has Leaved The Our Discord Server`);
})

});

bot.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;

    let args = message.content.slice(PREFIX.length).trim().split(' ');
    let command = args[0].toLowerCase();
    try {
        let commands = require(`./commands/${command}.js`); // Run command folder
        commands.run(bot, message, args); // Runs [Client, Message, Args]
    } catch (e) {
        console.log(e.stack); // Throws the error in console
    } finally {
        console.log(`${message.author.tag} used ${command} command`); // Logs if the command has been used.
    }

    if (!command) return message.channel.send("invalid command");
});

bot.login(process.env.BOT_TOKEN);
