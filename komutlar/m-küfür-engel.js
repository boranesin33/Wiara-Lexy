const EBBdc = require('discord.js');
const EBBdb = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!args[0]){
    message.channel.send("Küfür Engel için Doğru Kullanım: l!küfür-engel aç / l!küfür-engel kapat")
  }
  if (args[0] === 'aç'){
    message.channel.send("Küfür Engel başarıyla açıldı! Artık küfürler silinecek.")
    
    EBBdb.set(`kufur_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send("Küfür engel kapatıldı! Bundan sonra küfür serbest.")
    
    EBBdb.set(`kufur_${message.guild.id}`, "kapali")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfür"],
  permLevel: 0
}
exports.help = {
  name: "küfür-engel",
  description: "EBB Efebeybolat Tarafından yapılmistir",
  usage: "küfür-engel"
}

