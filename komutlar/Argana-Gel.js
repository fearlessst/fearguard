const Discord = require("discord.js");

exports.run = async (client, message, args) => {

if (!message.member.voice.channel) {
return message.reply("<a:721033655883005994:739539711319605338> Ses kanalında olman lazım! <a:721033655883005994:739539711319605338>");
}
const Argana = (reaction, user) => {
return ['✅', '❌'].includes(reaction.emoji.name) && user.id === Argana2.id;
};
  
let Argana2 = message.mentions.members.first()
if (!Argana2) return message.channel.send('<a:739431840074694696:739491383848599603> Bir Kullanıcı Belirtmelisin.');

let member = message.guild.member(Argana2);

if (!member.voice.channel) return message.channel.send('<a:739431840074694696:739491383848599603> Etiketlenen Kullanıcı Ses Kanalında Değil.').then(m => m.delete,{timeout: 5000});

const voiceChannel = message.member.voice.channel.id;
if (!voiceChannel) return;
  
let log = new Discord.MessageEmbed()
.setColor("#7289D")
.setDescription(`${Argana2}, ${message.author} Seni \`${message.member.voice.channel.name}\` Odasına Çekmek İstiyor. \n **Kabul ediyormusun ?**`)
  
let mesaj = await message.channel.send(log)
await mesaj.react("✅")
await mesaj.react("❌")
mesaj.awaitReactions(Argana, {
max: 1,
time: 60000,
errors: ['time']
}).then(collected => {
const reaction = collected.first();
if (reaction.emoji.name === '✅') {
let kabul = new Discord.MessageEmbed()
.setColor("0x348f36")
.setDescription(`<a:739431782109282345:739491378815434843> ${Argana2} Odaya Çekilme Teklifini Onayladı. Başarıyla Odaya Giriş Yapıldı.`)
message.channel.send(kabul)
Argana2.voice.setChannel(message.member.voice.channel.id)
} else {
let Argana3 = new Discord.MessageEmbed()
.setColor("0x800d0d")
.setDescription(`<a:739431840074694696:739491383848599603> ${Argana2} Odaya Çekilme Teklifini Reddetti. Odaya Giriş Yapılamadı.`)
message.channel.send(Argana3)
}
})
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["gel"],
  permLevel: 0,
}

exports.help = {
  name: 'çek'
  
}