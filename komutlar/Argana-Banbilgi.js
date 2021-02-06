const { MessageEmbed, Discord } = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')
exports.run = async (client, message, args) => {
//-------------------------------------------------------------------------------\\
  
if(!["Yetkili Rol ID"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`<a:721033655883005994:739539711319605338> ${message.author} Komutu Kullanmak İçin Yetkin Yok. <a:721033655883005994:739539711319605338>`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

//-------------------------------------------------------------------------------\\

  
  if(!args[0]) return message.channel.send(new MessageEmbed().setDescription(`<a:721033655883005994:739539711319605338> ${message.author} Bir ID Belirtmelisin. <a:721033655883005994:739539711319605338>`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  try {
    message.guild.fetchBan(args.slice(0).join(' '))
    .then(({ user, reason }) => message.channel.send(new MessageEmbed().setAuthor(user.tag, user.avatarURL()).setColor('0x348f36').addField('<a:721033655883005994:739539711319605338> Banlanan Kullanıcı', `**${user.tag}** \`(${user.id})\``).setDescription(`<a:721033655883005994:739539711319605338> **Ban Sebebi:** \`${reason}\``)))
  } catch(err) { message.channel.send(new MessageEmbed().setTimestamp().setColor('0x800d0d').setDescription('Belirtilen ID\'ye Ait Bir Ban Geçmişi Bulunmamaktadır.')) 
                               }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ban-info', 'ban-geçmişi','ban-sorgu'],
  permLevel: 0
};

exports.help = {
  name: 'ban-bilgi',
  kategori: 'yetkili'
};