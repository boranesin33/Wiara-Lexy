const Discord = require('discord.js');

exports.run = async(client, message) => {
  message.channel.send('Hemen ölçüyorum abim bi saniye..').then(message => {
    var espri = Math.floor(Math.random() * 100);
    message.edit(`**Senin Kamış  ${espri} CM ** :open_mouth: `);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaç-cm', 'kaccm', 'kac-cm'],
  permLevel: 0,
};

exports.help = {
  name: 'kaçcm',
  description: 'Malafatının Büyüklüğünü Söyler.',
  usage: 'kaçcm',
  kategori: 'eğlence'
};

