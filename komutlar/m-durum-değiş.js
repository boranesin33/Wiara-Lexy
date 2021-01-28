const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
  if (message.author.id !== ayarlar.sahip) return;
  let durumlar = ["online", "dnd", "idle", "sıfırla"];
  if (!args[0] || !durumlar.includes(args[0])) return message.reply('Geçerli bir durum belirtmelisin!\n'+durumlar.join(', '));
  client.user.setStatus(args[0]);
  message.reply(`Botun durumu başarıyla değiştirildi! => ${args[0]}`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = { 
  name: 'durum-değiş', 
  description: 'Durum değiştirir.',
  usage: 'durum-değiş',
  kategori: 'kullanıcı'
};

