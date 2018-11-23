const figlet = require("figlet");

exports.run = (bot, message, args) => {
  if (!args.slice(1).join(" ")) return message.channel.send("gatau mau nulis apa");
  figlet(args.slice(1).join(" "), (err, data) => {
    message.channel.send(data, {
      code: "ascii"
    });
  });
};