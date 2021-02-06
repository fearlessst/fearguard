const Discord = require("discord.js");

exports.run = async (client, message, args) => {

if (!message.member.voice.channel) {
return message.reply("<a:721033655883005994:739539711319605338> Ses kanalında olman lazım! <a:721033655883005994:739539711319605338>");
}
const Argana2 = (reaction, user) => {
return ['✅', '❌'].includes(reaction.emoji.name) && user.id === Argana.id;
};
  
let Argana = message.mentions.members.first();
if (!Argana) return message.channel.send('<a:739431840074694696:739491383848599603> Bir Kullanıcı Belirt.');

let rol = message.mentions.roles.first();
let member = message.guild.member(Argana);

if (!member.voice.channel) return message.channel.send('<a:739431840074694696:739491383848599603> Etiketlenen Kullanıcı Ses Kanalında Değil.').then(m => m.delete(5000));

  
let ArganaKanal = new Discord.MessageEmbed()
.setColor("#7289D")
.setDescription(`${Argana}, ${message.author} \`${Argana.voice.channel.name}\` Odasına Gelmek İstiyor. Kabul Ediyormusun ?`)
  
let mesaj = await message.channel.send(ArganaKanal)
await mesaj.react("✅")
await mesaj.react("❌")
mesaj.awaitReactions(Argana2, {
max: 1,
time: 60000,
errors: ['time']
}).then(collected => {
const reaction = collected.first();
if (reaction.emoji.name === '✅') {
let kabul = new Discord.MessageEmbed()
.setColor("0x348f36")
.setDescription(`<a:739431782109282345:739491378815434843> ${Argana} Odaya Gitme Teklifini Onayladı. Başarıyla Odaya Giriş Yapıldı.`)
message.channel.send(kabul)
message.member.voice.setChannel(Argana.voice.channel.id)
} else {
let İsmail = new Discord.MessageEmbed()
.setColor("0x800d0d")
.setDescription(`<a:739431840074694696:739491383848599603> ${Argana} Odaya Gitme Teklifini Reddetti. Odaya Giriş Yapılamadı.`)
message.channel.send(İsmail)
}
})}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["git"],
  permLevel: 0,
}

exports.help = {
  name: "git"
};