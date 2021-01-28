const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(`Bu özelliği kullanabilmek için \`ADMINISTRATOR\` yetkisine sahip olmalısınız.`);
  let every = message.guild.roles.cache.find(r => r.name === '@everyone')
message.channel.createOverwrite(every, {
  'SEND_MESSAGES': null,
 
})
 

   message.channel.send('Sohbet kanalı ``Yazılabilir`` durumuna getirildi.');
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aç','a','saç'],
kategori: 'sohbet',
  permLevel: 3
};

exports.help = {
  name: 'sohbet-aç',
  description: 'Sohbetinizi açmaya yarar.',
  usage: 'aç'
};