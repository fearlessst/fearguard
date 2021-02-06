
const { MessageEmbed } = require("discord.js");
const data = require("quick.db");
const jdb = new data.table("cezalar");
const kdb = new data.table("kullanici");
const ms = require('ms');
const moment = require('moment');
module.exports.run = async (client, message, args) => {
  
//-------------------------------------------------------------------------------\\

if(!["Yetkili Rol ID"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu Kullanmak İçin Yetkin Yok`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
const mutelog = message.guild.channels.cache.find(c => c.id === 'Mute Logu ID')//Mute logu
const muterol = message.guild.roles.cache.find(r => r.id === 'Muteli Rolü ID')//Muteli rolü

//-------------------------------------------------------------------------------\\

let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if (!member) return message.channel.send(new MessageEmbed().setColor('0x800d0d').setDescription(`<a:721033655883005994:739539711319605338> ${message.author}, Lütfen Bir Kullanıcı Etiketle !`))
          
let mute = message.mentions.members.first() || message.guild.members.cache.find(r => r.id === args[0]);
if (!mute) { new MessageEmbed().setColor('0x800d0d').setDescription(`<a:721033655883005994:739539711319605338> ${message.author}, Lütfen Mutelemek İstediğin Kullanıcıyı Belirt !`);
} else {
if (mute.roles.highest.position >= message.member.roles.highest.position) 
              {
return message.channel.send(new MessageEmbed().setColor('0x800d0d').setDescription(`<a:721033655883005994:739539711319605338> Bu Kullanıcı Senden Üst Veya Aynı Pozisyonda.`));
} else {
let zaman = args[1]   
.replace("sn", "s")
.replace("dk", "m")
.replace("sa", "h")
.replace("gün", "d");
if (!zaman) { message.channel.send(new MessageEmbed().setColor('0x800d0d').setDescription(`<a:721033655883005994:739539711319605338> Lütfen Bir Zaman Dilimi Belirtiniz.`));
} else {
let sebep = args[2]
if(!sebep) return message.channel.send(new MessageEmbed().setColor('0x800d0d').setDescription(`<a:721033655883005994:739539711319605338> Lütfen Bir Sebep Belirtiniz.`))  
                
let zamandilimi = zaman
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
let muteler = jdb.get(`tempmute`) || [];
if (!muteler.some(j => j.id == member.id)) {
kdb.add(`kullanici.${message.author.id}.mute`, 1);
data.add('case', 1)
const numara = await data.fetch('case')
moment.locale("tr");
kdb.push(`kullanici.${member.id}.sicil`, {
Yetkili: message.author.id,
Sebep: sebep,
Ceza: "MUTE",
Süre: zamandilimi,
cezano: numara,
Tarih: (`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}`) 
});
};
                 
data.set(`muteli_${member.guild.id + member.id}`, 'muteli')
data.set(`süre_${member.id + member.guild.id}`, zamandilimi)
                 
message.react('<a:krmztik:738927336002420778>')          
message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x348f36').setTimestamp().setDescription(`<a:krmztik:738927336002420778> ** ${member} Kişisi Yazı Kanallarında Yasaklandı ** <a:krmztik:738927336002420778> \n\n <a:726793664843743284:741483203826810922> **Gerekçe :** ${sebep} \n <a:726793664843743284:741483203826810922> **Süre :** ${zamandilimi} \n <a:726793664843743284:741483203826810922> **Yetkili :** ${message.author}`));
mutelog.send(
new MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL ({ dynamic: true}))
.setColor('ffdb55')
.setDescription(`
<a:krmztik:738927336002420778> **Metin Kanallarında Susturuldu !** <a:krmztik:738927336002420778>
<a:1041_discord_gif_benc:718482728273838092> **Kullanıcı:** <@${member.id}> (\`${member.id}\`)
<a:696053337736478810:744047725422706708> **Yetkili:** <@${message.author.id}> (\`${message.author.id}\`)
<a:3608_aaa:795803526672547891> **Sebep:** \`${sebep}\`
<a:794135379628261416:795802005053636669> **Süre:** \`${zamandilimi}\`
<a:726822408358592523:744121834592534559> **Tarih:** (\`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\`)
        
`))
mute.roles.add(muterol)
message.react('<a:krmztik:738927336002420778>')
} 
setTimeout(async function() {
mute.roles.remove(muterol)
mutelog.send(
new MessageEmbed()
.setColor('#494459')
.setTimestamp()
.setDescription(`
<a:yeiltik:738927349235581021> **Metin Kanallarında Susturulması Bitti !** <a:yeiltik:738927349235581021> 
<a:1041_discord_gif_benc:718482728273838092> **Kullanıcı:** <@${member.id}> (\`${member.id}\`)
<a:794135379628261416:795802005053636669> **Süre:** \`${zamandilimi}\`
<a:726822408358592523:744121834592534559> **Tarih:** (\`${moment(Date.now()).format("DD")} ${aylar[moment(Date.now()).format("MM")]} ${moment(Date.now()).add(10,"hours").format("YYYY HH:mm:ss")}\`)`)
);
}, ms(zaman));
        
}}}
 
  
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["cmute"],
    permLevel: 0,
    name: "chatmute"
  }
  
  exports.help = {
    name: "cmute"
  };
  
  