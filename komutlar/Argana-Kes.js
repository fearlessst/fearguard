const { MessageEmbed } = require('discord.js');
const config = require("../ayarlar.json")

exports.run = async(client, message, args) => {
  
if(!["Yetkili Rol ID"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author} Bu Komutu Kullanmak İçin Yetkin Bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
const kanal = message.member.voiceChannel
const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return;
if(message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Etiketlenen Kullanıcı Sizden Üst Veya Aynı Pozisyondadır.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
message.guild.member(member.id).voice.setChannel(null)
 
   message.channel.send(new MessageEmbed().setDescription(`<a:Follia_okokok:801974805934768168> ${member} Kullancısının ${message.author} Tarafından Başarılı Bir Şekilde Bağlantısı Kesildi.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#7289D').setTimestamp()).then(x => x.delete({timeout: 10000}));
}
exports.conf = { 
enabled: true, 
guildOnly: true, 
aliases: ["ses-kes"]
}

exports.help = {
name: "kes" 
}

//code creator: sadxmamy