const { MessageEmbed } = require("discord.js");
const Argana2 = require("quick.db");
const Argana = new Argana2.table("kullanici");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (client, message, args) => {

//-------------------------------------------------------------------------------\\
  
if(!["Yetkili Rol ID", "Yetkili Rol ID 2"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

//-------------------------------------------------------------------------------\\
  
  
let kullanici = message.mentions.users.first() || client.users.cache.get(args[0]) || (args.length > 0 ? client.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
let uye = message.guild.member(kullanici);
let sicil = Argana.get(`kullanici.${uye.id}.sicil`) || [];
moment.locale("tr");
sicil = sicil.reverse();
let sicilPanel = sicil.length > 0 ? sicil.map((value, index) => `\`${index + 1}.\` [**${value.Ceza}**] \`${value.Tarih}\` tarihinde **${value.Sebep}** sebebinden dolayı \`${value.Süre}\` süresince ${message.guild.members.cache.has(value.Yetkili) ? message.guild.members.cache.get(value.Yetkili) : value.Yetkili} \`cezalandırıldı.\` `).join("\n\n") : "<a:yeiltik:738927349235581021> **Bu Kullanıcının Sicili Temiz!** <a:yeiltik:738927349235581021>";
message.react('<a:yeiltik:738927349235581021>')
message.channel.send(new MessageEmbed()
.setColor("RED")
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setDescription(`**<@!${uye.id}> İsimli Kullanıcının Sicili** \n\n ${sicilPanel}`)
.setFooter(`Argana`))
};

module.exports.conf = {
    guildOnly: true,
    aliases: ["sicil"],
    permLevel: 0
};

module.exports.help = {
    name: "geçmiş",
};
