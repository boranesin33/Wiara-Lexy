const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setTitle("<a:brave:782028955153858560> Beni Sunucuna Ekle <a:brave:782028955153858560>")
  .setDescription("[<a:yeee:776118497427193856> __**Davet Et**__ <a:yeee:776118497427193856> ](https://discord.com/oauth2/authorize?client_id=788550983961018369&scope=bot&permissions=8) \n [<a:yeee:776118497427193856> __**Destek Sunucusu**__ <a:yeee:776118497427193856> ](https://discord.gg/UbeTdwHKJx)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};