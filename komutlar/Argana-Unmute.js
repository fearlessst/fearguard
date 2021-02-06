const { MessageEmbed } = require('discord.js');
const data = require('quick.db');
const ms = require('ms');
const moment = require('moment')

module.exports.run = async (client, message, args) => {
  
//-------------------------------------------------------------------------------\\
  
if(!["Yetkili Rol ID"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
 
const mutelog = message.guild.channels.cache.find(c => c.id === 'Mute Logu ID')//Mute log
const muterol = message.guild.roles.cache.find(r => r.id === 'Mute Rolü ID')//Muteli rolü

//-------------------------------------------------------------------------------\\


let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if (!member) return message.channel.send(new MessageEmbed().setColor('0x800d0d').setDescription(`<a:721033655883005994:739539711319605338> ${message.author}, Lütfen Bir Kullanıcı Etiketle !`))
  
let mute = message.mentions.members.first() || message.guild.members.cache.find(r => r.id === args[0]);
if (!mute) { new MessageEmbed().setColor('0x800d0d').setDescription(`<a:721033655883005994:739539711319605338> ${message.author}, Lütfen Cezasını Bitirmek İstediğin Kullanıcıyı Belirt !`);
} else {
if (mute.roles.highest.position >= message.member.roles.highest.position) 
{
        return message.channel.send(new MessageEmbed().setColor('0x800d0d').setDescription(`<a:721033655883005994:739539711319605338> Bu Kullanıcı Senden Üst Veya Aynı Pozisyonda.`));
} else {
let sebep = args[1]
if(!sebep) return message.channel.send(new MessageEmbed().setColor('0x800d0d').setDescription(`<a:721033655883005994:739539711319605338> Lütfen Bir Sebep belirtiniz.`))  
  
let zaman1 = args[1]
.replace("sn", "s")
.replace("dk", "m")
.replace("sa", "h")
.replace("gün", "d");
//
var vakit = zaman1
.replace("m", " dakika")
.replace("s", " saniye")
.replace("h", " saat")
.replace("d", " d");  
  
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
       {
message.react('<a:yeiltik:738927349235581021>')
message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x348f36').setTimestamp().setDescription(`<a:Follia_Diamond:801974785135214633> **Bir Üyenin Yasağı Bitirildi** <a:Follia_Diamond:801974785135214633> \n\n <a:726793664843743284:741483203826810922> **Cezayı Bitiren Yetkili :** ${message.author} (\`${message.author.id}\`) \n <a:726793664843743284:741483203826810922> **Cezası Biten Üye :** ${member} (\`${member.user.id}\`) \n <a:726793664843743284:741483203826810922> **Uygulama :** Yazı Yasağı Bitirme (ChatMute) \n <a:726793664843743284:741483203826810922> **Cezanın Bitme Sebebi :** \`${sebep}\``));
mutelog.send(
new MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL ({ dynamic: true}))
.setColor('009caf')
.setDescription(`
<a:yeiltik:738927349235581021> **Bir Üyenin Yazı Yasağı Bitirildi !** <a:yeiltik:738927349235581021>
<a:1041_discord_gif_benc:718482728273838092> **Kullanıcı:** <@${member.id}> (\`${member.id}\`)
<a:1041_discord_gif_benc:718482728273838092> **Yetkili:** <@${message.author.id}> (\`${message.author.id}\`)
<a:3608_aaa:795803526672547891> **Sebep:** \`${sebep}\`
<a:726822408358592523:744121834592534559> **Tarih:** \`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\`)

`))
mute.roles.remove(muterol)
message.react('<a:yeiltik:738927349235581021>')
} 


      }}}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unmute"],
  permLevel: 0,
  name: "unmute"
}

exports.help = {
  name: "unmute"
};

