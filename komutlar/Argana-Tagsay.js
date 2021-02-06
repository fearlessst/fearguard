const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => {
  
//-------------------------------------------------------------------------------\\
  
if(!['Yetkili Rol ID'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_Nono:801974900788953108> ${message.author} Komutu Kullanmak İçin Yetkin Bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
//-------------------------------------------------------------------------------\\  
  

let tag = "∡";
const ttag = message.guild.members.cache.filter(m => m.user.username.includes(tag)).size

const embed = new MessageEmbed()
.setColor('RANDOM')
message.channel.send(embed.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription(`<a:794166594645131266:795802013496639518> Taglı Üye Sayısı ・ \`**${ttag}**\``));
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["tag-say"],
  permLvl: 0,
}

  exports.help = {
  name: 'taglı'
}
