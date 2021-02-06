const { MessageEmbed } = require('discord.js');
const data = require('quick.db');
const Argana = new data.table("kullanici");
exports.run = async (client, message, args) => {
  
//-------------------------------------------------------------------------------\\
  if(!["Yetkili Rol ID", "Yetkili Rol ID 2","Yetkili Rol ID 3"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
//-------------------------------------------------------------------------------\\
  
  
let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_Nono:801974900788953108> ${message.author}, Bir Kullanıcıyı Etiketlemelisiniz.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));

if (!member) {
let sicil = Argana.delete(`kullanici.${member.id}.sicil`) || [];
message.channel.send(new MessageEmbed().setColor('0x348f36').setDescription(`<a:Follia_Okok:801974890768367637> ${message.author} Sana Ait Sicil Verilerini Başarıyla Sildim!`))
}
  
if(member) {
let sicil = Argana.delete(`kullanici.${member.id}.sicil`) || [];
message.channel.send(new MessageEmbed().setColor('0x348f36').setDescription(`<a:Follia_Okok:801974890768367637> ${member} Kullanıcısına Ait Sicil Verilerini Başarıyla Sildim!`))

};
  
}
  

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sicil-temizle","sicil-temizle"],
  PermLevel: 0
};

 

exports.help = {
  name: "sicil-temizle",
  description: "",
  usage: ""
};