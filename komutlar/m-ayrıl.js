const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id !== "693509990253854862") return message.reply(' Sahibim Sen Değilsin');
   message.channel.send('İstediğin Sunucudan Ayrıldım Sahibim.');
   message.guild.leave()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ayrıl'],
  permLevel: 0,
  kategori: "yapımcı"
};

exports.help = {
  name: 'ayrıl',
  description: 'Bot Sunucudan Ayrılır.',
  usage: 'ayrıl'
};