const { MessageEmbed } = require('discord.js')
const Argana = require('quick.db')
const moment = require('moment')
exports.run = async (client, message, args) => {

//-------------------------------------------------------------------------------\\
  
if(!["Yetkili Rol ID"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author} Komutu Kullanmak İçin Yetkin Bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
const cezalırol = 'Jail Rol ID'
const jaillog = message.guild.channels.cache.find(c => c.id === 'Jail Log ID')

//-------------------------------------------------------------------------------\\


let kullanici = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
let sebep = args[1]
if(!kullanici) return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Bir Kullanıcı Etiketlemelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(!sebep) return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Bir Sebep Belirtmelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(message.member.roles.highest.position <= kullanici.roles.highest.position) return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Etiketlenen Kullanıcı Sizden Üst Veya Aynı Pozisyonda.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(!kullanici.bannable)return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Etiketlenen Kullanıcıya Komutu Kullanamazsın.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === message.author.id)return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Kendine Komutu Kullanamazsın.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === client.user.id)return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Bir Botu Komutu Kullanamazsın.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === message.guild.OwnerID) return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Sunucu Sahibinine Komutu Kullanamazsın.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));

let Argana1 = args[1]
.replace("sn", "s")
.replace("dk", "m")
.replace("sa", "h")
.replace("gün", "d");
var vakit = Argana1
.replace("m", " dakika")
.replace("s", " saniye")
.replace("h", " saat")
.replace("d", " d");  
  
Argana.delete(`cezali_${message.guild.id + kullanici.id}`, 'cezali')
Argana.delete(`süreJail_${message.mentions.users.first().id + message.guild.id}`, Argana1)

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
  

moment.locale("tr");
jaillog.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('RANDOM').setTimestamp().setDescription(`<a:721033655883005994:739539711319605338> Bir Kullanıcı Hapisden Çıkarıldı. <a:721033655883005994:739539711319605338> \n\n <a:Follia_Diamond:801974785135214633> **Yetkili :** ${message.author} (\`${message.author.id}\`) \n <a:Follia_Diamond:801974785135214633> **Cezası Biten Üye :** ${kullanici} (\`${kullanici.user.id}\`) \n <a:Follia_Diamond:801974785135214633> **Çıkartılma Sebebi :** \`${sebep}\` \n <a:Follia_Diamond:801974785135214633> **Uygulama :** Hapishaneden Çıkartma (UnJail) \n <a:Follia_Diamond:801974785135214633> **Çıkış Tarihi :** \`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\``));
message.react('<a:Follia_Okok:801974890768367637>')

kullanici.roles.remove(cezalırol)
message.guild.roles.cache.forEach(async r => {
let roller = Argana.fetch(`${message.guild.id}.jail.${kullanici.id}.roles.${r.id}` )
if(roller != r.id)  return ;
if(roller){kullanici.roles.add(roller)}
})
  
  
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['unjail', 'ceza-kaldır'],
    permLevel: 0,
}

exports.help = {
      name: "unjail"  
  
}