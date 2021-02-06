const { MessageEmbed } = require('discord.js')
const datab = require('quick.db')
const moment = require('moment')
exports.run = async (client, message, args) => {

//-------------------------------------------------------------------------------\\  
  
if(!["Yetkili Rol ID"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author} Komutu Kullanmak İçin Yetkin Bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

const banlog = message.guild.channels.cache.find(c => c.id === 'Ban Logu ID')//Ban Log 

//-------------------------------------------------------------------------------\\


  
          let tumaylar = {
        "01": "Ocak",  
        "02": "Şubat", 
        "03": "Mart",  
        "04": "Nisan", 
        "05": "Mayıs", 
        "06": "Haziran", 
        "07": "Temmuz",
        "08": "Ağustos", 
        "09": "Eylül", 
        "10": "Ekim", 
        "11": "Kasım", 
        "12": "Aralık", 
        }
  let aylar = tumaylar;   
  
let kisi = await client.users.fetch(args[0]);
if(!kisi) return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author} Bir ID Belirtmelisin.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

message.guild.members.unban(kisi.id)
message.channel.send(new MessageEmbed().setDescription(`<a:721033655883005994:739539711319605338> **Bir Kullanıcının Yasağı Kaldırıldı** <a:721033655883005994:739539711319605338> \n <a:740691323585036379:744159361844248596> **Yetkili :** ${message.author} (\`${message.author.id}\`) \n <a:740691323585036379:744159361844248596> **Cezası Biten Üye :** ${kisi} (\`${kisi.user.id}\`) \n <a:740691323585036379:744159361844248596> **Uygulama :** Ban Kaldırma (UnBan) \n <a:740691323585036379:744159361844248596> **Yasak Kaldırma Tarihi :** \`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\``).setColor('0x348f36').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic:true }))).then(x => x.delete({ timeout: 5000}))
  
message.react('<a:Follia_Okok:801974890768367637>')
banlog.send(new MessageEmbed().setColor('0x348f36').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp().setDescription(`<a:721033655883005994:739539711319605338> **Yasaklama Kaldırıldı!**\n\n <a:721033655883005994:739539711319605338> **Yetkili:** ${message.author} (\`${message.author.id}\`)\n <a:721033655883005994:739539711319605338> **Yasağı Biten Üye :** ${kisi.user.tag} (\`${kisi.user.id}\`) \n <a:721033655883005994:739539711319605338> **Tarih :** \`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\` `));

}
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unban", "yasak-kaldır"],
  permLvl: 0,
}

  exports.help = {
  name: 'unban'
}

