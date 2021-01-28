const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0
     let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  çevrimiçi = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
    const infinity  = new Discord.MessageEmbed()
        .setColor("BLACK")
        .addField(`<a:brave:782028955153858560> **Sunucudaki Toplam Üye Sayısı**`,`**\`\`\`${message.guild.memberCount}\`\`\`**`)
        .addField(`<a:brave:782028955153858560> **Toplam Çevrimiçi Üye Sayısı**`, `**\`\`\`${çevrimiçi}\`\`\`**`) 
        .addField(`<a:brave:782028955153858560> **Seslideki Üye Sayısı**`,`**\`\`\`${count}\`\`\`**`)
        .setFooter(`Łexy`, client.user.avatarURL())
    message.channel.send(infinity);

} 

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
}