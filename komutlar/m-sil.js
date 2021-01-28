const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok.");
if(!args[0]) return message.channel.send("<a:brave:782028955153858560> **Lütfen Silinicek Mesaj Miktarını Yazın** <a:brave:782028955153858560>");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`<a:brave:782028955153858560> **${args[0]} Adet Mesaj Sildim** <a:brave:782028955153858560>`).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil'
};