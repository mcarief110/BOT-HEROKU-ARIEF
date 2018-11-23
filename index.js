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
const TOKEN = process.env.TOKEN
const PREFIX = process.env.PREFIX

var bot = new Discord.Client()

bot.on("ready", function() {
    console.log("Ntapp");
    bot.user.setActivity("gunakan | type g,help", { type: "Streaming" })  // Set the bot's PLAYING/STREAMING/LISTENING/WATCHING status (.help | discord.gg/nNapvDU)
    bot.user.setStatus("online")  // Set the bot's online/idle/dnd/invisible status
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

bot.login(process.env.TOKEN);
