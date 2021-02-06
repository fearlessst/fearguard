const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db");
const db = new qdb.table("ayarlar");
const jdb = new qdb.table("cezalar");
const kdb = new qdb.table("kullanici");
const ms = require('ms');
const moment = require("moment");

exports.run = async (client, message, args) => {

//-------------------------------------------------------------------------------\\
  
if(!["Yetkili Rol ID"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
const mutelog = message.guild.channels.cache.find(c => c.id === 'Mute Log ID')//mute log

//-------------------------------------------------------------------------------\\


let aylartoplam = {
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
"12": "Aralık"};
let aylar = aylartoplam;

let kullanici = message.mentions.members.first()  || message.guild.members.cache.get(args[0]);
if(!kullanici) return message.channel.send(new MessageEmbed().setDescription(`<a:721033655883005994:739539711319605338> ${message.author}, Bir Kullanıcı Etiketle.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
if(message.member.roles.highest.position <= kullanici.roles.highest.position) return message.channel.send(new MessageEmbed().setDescription(`<a:721033655883005994:739539711319605338> ${message.author}, Etiketlenen Kullanıcı Sizden Üst Veya Aynı Pozisyondadır.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === message.author.id)return message.channel.send(new MessageEmbed().setDescription(`<a:721033655883005994:739539711319605338> ${message.author}, Kendine Sunucuda Mute Atamazsın.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === client.user.id)return message.channel.send(new MessageEmbed().setDescription(`<a:721033655883005994:739539711319605338> ${message.author}, Bir Bota Sunucuda Mute Atılamazsın.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === message.guild.OwnerID) return message.channel.send(new MessageEmbed().setDescription(`<a:721033655883005994:739539711319605338> ${message.author}, Sunucu Sahibine Sunucuda Mute Atılamazsın.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
let muteler = jdb.get(`voicemute`) || [];
let sure = args[1];
let sebep = args.splice(2).join(" ");
if(!sure) return message.channel.send(new MessageEmbed().setDescription(`<a:721033655883005994:739539711319605338> ${message.author}, Bir Zaman Belirtmelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(!sebep) return message.channel.send(new MessageEmbed().setDescription(`<a:721033655883005994:739539711319605338> ${message.author}, Bir Sebep Belirtmelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.voice.channel) kullanici.voice.setMute(true).catch();
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
db.set(`seslide2.${kullanici.user.id}.${message.guild.id}`, vakit)
if (!muteler.some(j => j.id == kullanici.id)) {
kdb.add(`kullanici.${message.author.id}.mute`, 1);
moment.locale("tr");
kdb.push(`kullanici.${kullanici.id}.sicil`, {
Yetkili: message.author.id,
Sebep: sebep,
Ceza: "VMUTE",
Süre: sure,
Tarih: (`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}`) 
});


message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x348f36').setTimestamp().setDescription(`<a:Follia_Diamond:801974785135214633> **Bir Üye Ses Kanallarında Yasaklandı** <a:Follia_Diamond:801974785135214633> \n\n <a:726793664843743284:741483203826810922> **Cezayı Veren Yetkili :** ${message.author} (\`${message.author.id}\`) \n <a:726793664843743284:741483203826810922> **Ceza Alan Üye :** ${kullanici} (\`${kullanici.user.id}\`) \n <a:726793664843743284:741483203826810922> **Uygulama :** Ses Kanallarında Susturma (VoiceMute) \n <a:726793664843743284:741483203826810922> **Ceza Sebebi :** \`${sebep}\``));
message.react('<a:yeiltik:738927349235581021>')
mutelog.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('RANDOM').setTimestamp().setDescription(`<a:Follia_Diamond:801974785135214633> **Bir Üye Ses Kanallarında Yasaklandı** <a:Follia_Diamond:801974785135214633> \n\n <a:726793664843743284:741483203826810922> **Cezayı Veren Yetkili :** ${message.author} (\`${message.author.id}\`) \n <a:726793664843743284:741483203826810922> **Ceza Alan Üye :** ${kullanici} (\`${kullanici.user.id}\`) \n <a:726793664843743284:741483203826810922> **Uygulama :** Ses Kanallarında Susturma (VoiceMute) \n <a:726793664843743284:741483203826810922> **Ceza Sebebi :** \`${sebep}\` \n <a:726793664843743284:741483203826810922> **Tarih:** \`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\``));
setTimeout(async function() {
kullanici.voice.setMute(false);  
mutelog.send(new MessageEmbed().setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription(`<a:Follia_Diamond:801974785135214633> **Bir Üye Ses Kanallarında Yasaklandı** <a:Follia_Diamond:801974785135214633> \n\n <a:726793664843743284:741483203826810922> **Cezayı Veren Yetkili :** ${message.author} (\`${message.author.id}\`) \n <a:726793664843743284:741483203826810922> **Ceza Alan Üye :** ${kullanici} (\`${kullanici.user.id}\`) \n <a:726793664843743284:741483203826810922> **Uygulama :** Ses Kanallarında Susturma (VoiceMute) \n <a:726793664843743284:741483203826810922> **Ceza Sebebi :** \`${sebep}\` \n <a:726793664843743284:741483203826810922> **Tarih:** \`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\``))}, ms(zaman1));}
           
}; 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["vmute", "seslisustur"],
  permLevel: 0,
}

exports.help = {
  name: "vmute"
};
