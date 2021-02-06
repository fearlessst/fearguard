const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix 
exports.run = async (client ,message, args) =>{
if(args[0] === 'aç','Aç') {
if(db.has(`kufur_${message.guild.id}`)) return message.channel.send(new MessageEmbed().setDescription(`<a:721033655883005994:739539711319605338> ${message.author} **Komut Durumu :** \`Açık\`. \n <a:721033655883005994:739539711319605338> **Kapatmak İçin :** \`${prefix}Küfür Kapat\``).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
db.set(`kufur_${message.guild.id}`, "acik")
message.channel.send(new MessageEmbed().setDescription(`<a:mortik:738927351479402547> ${message.author} **Küfür Filtersini Başarıyla Açtın.** \n <a:mortik:738927351479402547> **Komut Durumu :** \`Açık\`.`).setColor('0x348f36').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
return
}
if (args[0] === 'kapat','Kapat') {
if(!db.has(`kufur_${message.guild.id}`)) return message.channel.send(new MessageEmbed().setDescription(`<a:721033655883005994:739539711319605338> ${message.author} **Komut Durumu :** \`Kapalı\`. \n <a:721033655883005994:739539711319605338> **Açmak İçin :** \`${prefix}Küfür Aç\``).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
db.delete(`kufur_${message.guild.id}`)
message.channel.send(new MessageEmbed().setDescription(`<a:mortik:738927351479402547> ${message.author} **Küfür Filtersini Başarıyla Kapattın.** \n <a:mortik:738927351479402547> **Komut Durumu :** \`Kapalı\`.`).setColor('0x348f36').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
return
}
message.channel.send(new MessageEmbed().setDescription(`<a:721033655883005994:739539711319605338> ${message.author} **Komutu Çalıştırmak İçin \`Aç\` Veya \`Kapat\` Demen Gerekiyor.** <a:721033655883005994:739539711319605338>`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür', 'küfür-engel','Küfür'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-ayarla',
 description: '',
 usage: ''
};