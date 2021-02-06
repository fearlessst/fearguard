const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["Yetkili Rol ID"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "Sunucu ID"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var Argana = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(Argana) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `<a:sfr:739071105767178291> `,
    '1': `<a:bir:739071123580518470>`,
    '2': `<a:iki:739071133134880828>`,
    '3': `<a:uc:739071134087249940>`,
    '4': `<a:drt:739071133009313873>`,                       
    '5': `<a:bes:739071133667819552>`,
    '6': `<a:alti:739071134841962548>`,
    '7': `<a:yedi:739071144765816842>`,
    '8': `<a:sekiz:739071145575448596>`,
    '9': `<a:dokuz:739071145348825108>`}[d];
      })
    }
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var Argana2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(Argana2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
'0': `<a:sfr:739071105767178291> `,
    '1': `<a:bir:739071123580518470>`,
    '2': `<a:iki:739071133134880828>`,
    '3': `<a:uc:739071134087249940>`,
    '4': `<a:drt:739071133009313873>`,                       
    '5': `<a:bes:739071133667819552>`,
    '6': `<a:alti:739071134841962548>`,
    '7': `<a:yedi:739071144765816842>`,
    '8': `<a:sekiz:739071145575448596>`,
    '9': `<a:dokuz:739071145348825108>`}[d];
      })
    }

var taglılar = 0;
let tag = "TAG";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var Argana3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(Argana3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
'0': `<a:sfr:739071105767178291> `,
    '1': `<a:bir:739071123580518470>`,
    '2': `<a:iki:739071133134880828>`,
    '3': `<a:uc:739071134087249940>`,
    '4': `<a:drt:739071133009313873>`,                       
    '5': `<a:bes:739071133667819552>`,
    '6': `<a:alti:739071134841962548>`,
    '7': `<a:yedi:739071144765816842>`,
    '8': `<a:sekiz:739071145575448596>`,
    '9': `<a:dokuz:739071145348825108>`}[d];
      })
    }

  
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var Argana4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(Argana4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
'0': `<a:sfr:739071105767178291> `,
    '1': `<a:bir:739071123580518470>`,
    '2': `<a:iki:739071133134880828>`,
    '3': `<a:uc:739071134087249940>`,
    '4': `<a:drt:739071133009313873>`,                       
    '5': `<a:bes:739071133667819552>`,
    '6': `<a:alti:739071134841962548>`,
    '7': `<a:yedi:739071144765816842>`,
    '8': `<a:sekiz:739071145575448596>`,
    '9': `<a:dokuz:739071145348825108>`}[d];
      })
    }

  
  
  
var booster = message.guild.roles.cache.get("Boster Rol ID").members.size
var booster = booster.toString().replace(/ /g, "    ")
var Argana5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(Argana5) {
booster = booster.replace(/([0-9])/g, d => {
return {
'0': `<a:sfr:739071105767178291> `,
    '1': `<a:bir:739071123580518470>`,
    '2': `<a:iki:739071133134880828>`,
    '3': `<a:uc:739071134087249940>`,
    '4': `<a:drt:739071133009313873>`,                       
    '5': `<a:bes:739071133667819552>`,
    '6': `<a:alti:739071134841962548>`,
    '7': `<a:yedi:739071144765816842>`,
    '8': `<a:sekiz:739071145575448596>`,
    '9': `<a:dokuz:739071145348825108>`}[d];
      })
    }


  
const embed1 = new Discord.MessageEmbed()
.setColor('0x0088ff')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
<a:794166594645131266:795802013496639518> **Sunucuda Toplam** ${üyesayısı} Üye bulunmakta. \n
<a:794135379628261416:795802005053636669> **Sunucuda Toplam** ${cevirimici} Üye Çevrimiçi. \n
<a:792897134408106028:804080118351134740> **Ses Kanallarında** ${sessayı} Üye Sohbet Ediyor. \n
<a:Follia_Diamond:801974785135214633> **Tagımızda Toplam ** ${taglılar} Üye Bulunmakta. \n
<a:1819_boostingtop:804082637525352510> **Sunucuda Toplam ** ${booster} Booster Üye Bulunmakta.`)

msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}