const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async(client, message, args) =>{
 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komudu kullanabilmek için `ADMINISTRATOR` yetkisine sahip olmanız gerek.");
  
let judgedev = await db.fetch(`judgeteam?Ototag_${message.guild.id}`) || await db.fetch(`judgeteam?OtotagKanal_${message.guild.id}`)
if(!judgedev) return message.reply(`:x: Bu sistem zaten kapalı durumda. Açmak için **${prefix}ototag <kanal> <tag>**`)
db.delete(`judgeteam?Ototag_${message.guild.id}`) 
db.delete(`judgeteam?OtotagKanal_${message.guild.id}`)
message.channel.send(`Ototag kapatıldı!\nYeni gelen kullanıcılara hiç bir tag vermeyeceğim.`)
};  
exports.conf = {
  enabled: false, 
  guildOnly: false, 
  aliases: ['ototag-kapat'],
  permLevel: 3 
};
exports.help = {
  name: 'ototagkapat',
  description: 'Ototag Sistemi',
  usage: 'ototagkapat'
};