const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {
//-------------------------------------------------------------------------------\\
  
if(!["Yetkili Rol ID","Yetkili Rol ID 2"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

//-------------------------------------------------------------------------------\\  
  
  
let Argana;
let Argana1 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
let Argana2 = message.guild.members.cache.get(args[0]);
if(!Argana1) return message.channel.send(new MessageEmbed().setTimestamp().setColor('0x800d0d').setDescription(`<a:721033655883005994:739539711319605338> Bir ID Girmelisin Veya Kullanıcı Etiketlemelisin <a:721033655883005994:739539711319605338>`))
if (Argana1) {
Argana = Argana1;
}
if (Argana2) {
Argana = Argana2;
}
if (!Argana) {
Argana = message.member;
}
let ses = Argana.voice.channel;
if (!ses) {
message.channel.send(new MessageEmbed().setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription("<a:Follia_nonono:801974806086025246> **<@"+Argana.id+"> Bir Sesli Kanalda Değil!**"));
}
if (ses) {
message.channel.send(new MessageEmbed().setColor('#7289D').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription(
"<a:Follia_okokok:801974805934768168> **<@"+Argana.id+"> İsimli Kişi `"+ses.name+"` İsimli Kanalda!**"
));
}};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["sorgula","sessorgula"],
    permLevel: 0,
    name: "sessorgulama",
  }
  
  exports.help = {
    name: "sessorgu"
  };
  
  