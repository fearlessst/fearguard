const db = require('quick.db')
const { Discord, MessageEmbed } = require('discord.js')
 let ayarlar = require('../ayarlar.json')
 var prefix = ayarlar.prefix
exports.run = async (bot, message, args) => {
  
if (!args[0]) return message.channel.send(new MessageEmbed().setDescription(`<a:721033655883005994:739539711319605338> ${message.author} **Komutu Çalıştırmak İçin \`Aç\` Veya \`Kapat\` Demen Gerekiyor.** <a:721033655883005994:739539711319605338>`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` Yetkisine Sahip Olmalısın!')
 
if (args[0] == 'aç','Aç') {
if(db.has(`reklam_${message.guild.id}`)) return message.channel.send(new MessageEmbed().setDescription(`<a:721033655883005994:739539711319605338> ${message.author} **Komut Durumu :** \`Açık\`. \n <a:721033655883005994:739539711319605338> **Kapatmak İçin :** \`${prefix}Reklam Kapat\``).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
db.set(`reklam_${message.guild.id}`, 'acik')
message.channel.send(new MessageEmbed().setDescription(`<a:mortik:738927351479402547> ${message.author} **Reklam Filtersini Başarıyla Açtın.** \n <a:mortik:738927351479402547> **Komut Durumu :** \`Açık\`.`).setColor('0x348f36').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
}
if (args[0] == 'kapat','Kapat') {
if(!db.has(`reklam_${message.guild.id}`)) return message.channel.send(new MessageEmbed().setDescription(`<a:721033655883005994:739539711319605338> ${message.author} **Komut Durumu :** \`Kapalı\`. \n <a:721033655883005994:739539711319605338> **Açmak İçin :** \`${prefix}Reklam Aç\``).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
db.delete(`reklam_${message.guild.id}`)
message.channel.send(new MessageEmbed().setDescription(`<a:mortik:738927351479402547> ${message.author} **Küfür Filtersini Başarıyla Kapattın.** \n <a:mortik:738927351479402547> **Komut Durumu :** \`Kapalı\`.`).setColor('0x348f36').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
}
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['advertisement','reklam','Reklam'],
  permLevel: 0
};
 
exports.help = {
  name: 'reklam-engelle',
  description: '',
  usage: ''
};