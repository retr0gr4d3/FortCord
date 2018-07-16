const Discord = require('discord.js');
const client = new Discord.Client();

// 'client.on('message')' commands are triggered when the
// specified message is read in a text channel that the bot is in.

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login("NDY4MzcyMzQxMzc0NTgyNzg0.Di4Nrg.TTJ_Cu5q6jSNWE8l-CeIFbCNV7g");


