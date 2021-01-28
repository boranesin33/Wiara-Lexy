const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async(client, message, args) =>{
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komudu kullanabilmek için `ADMINISTRATOR` yetkisine sahip olmanız gerek.");
  
let judgedev = await db.fetch(`judgeteam?Ototag_${message.guild.id}`) || await db.fetch(`judgeteam?OtotagKanal_${message.guild.id}`)
if(judgedev) return message.reply(`:x: Bu sistem zaten aktif durumda. Kapatmak için **${prefix}ototagkapat**`)
let judge_kanal = message.mentions.channels.first()
let judge_tag = args.slice(1).join(' ')
if(!judge_kanal || !judge_tag) return message.reply(`Ototag sistemini ayarlamak için **kanal ve tag** belirtmelisin.`)
  
db.set(`judgeteam?Ototag_${message.guild.id}`,judge_tag) 
db.set(`judgeteam?OtotagKanal_${message.guild.id}`,judge_kanal.id)
message.channel.send(`Ototag aktif edildi!\nYeni gelen kullanıcılara **${judge_tag}** Tagını vereceğim.`)
};  
exports.conf = {
  enabled: false, 
  guildOnly: false, 
  aliases: ['ototagayarla'],
  permLevel: 3 
};
exports.help = {
  name: 'ototag',
  description: 'Ototag Sistemi',
  usage: 'ototag kanal tag'
};