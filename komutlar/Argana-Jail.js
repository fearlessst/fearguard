const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
const jdb = new db.table("cezalar");
const kdb = new db.table("kullanici");
const ayarlar = require('../ayarlar.json');
const moment = require('moment')
const prefix = ayarlar.prefix;

module.exports.run = async (client, message, args) => {

//-------------------------------------------------------------------------------\\
  
if(!["Yetkili Rol ID"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
const cezalırol =                                               'Jail Rol ID'
const jaillog = message.guild.channels.cache.find(c => c.id === 'Jail Kanal ID')

//-------------------------------------------------------------------------------\\



let kullanici = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
let zaman = args[1]
let sebep = args[2]
if(!kullanici) return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Bir Kullanıcı Etiketlemelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(!args[1]) return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Bir Zaman Dilimi Belirtmelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(!sebep) return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Bir Sebep Belirtmelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(message.member.roles.highest.position <= kullanici.roles.highest.position) return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Etiketlenen Kullanıcı Sizden Üst Veya Aynı Pozisyondadır.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === message.author.id)return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Kendini Sunucuda Hapishaneye Atamazsın.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === client.user.id)return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Bir Botu Sunucuda Hapishaneye Atamazsın.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === message.guild.OwnerID) return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Sunucu Sahibini Sunucuda Hapishaneye Atamazsın.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));

message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x348f36').setTimestamp().setDescription(`<a:721033655883005994:739539711319605338> Bir Kullanıcı Hapishaneye Atıldı. <a:721033655883005994:739539711319605338> \n\n <a:Follia_Diamond:801974785135214633> **Yetkili :** ${message.author} (\`${message.author.id}\`) \n <a:Follia_Diamond:801974785135214633> **Cezalandırılan Üye :** ${kullanici} (\`${kullanici.user.id}\`) \n <a:Follia_Diamond:801974785135214633> **Ceza Sebebi :** \`${sebep}\` \n <a:Follia_Diamond:801974785135214633> **Uygulanan Ceza :** Hapishaneye Gönderme (Jail) \n <a:Follia_Diamond:801974785135214633> **Cezalandırma Tarihi :** \`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\``));
 
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
  
db.set(`cezali_${message.guild.id + kullanici.id}`, 'cezali')
db.set(`süreJail_${message.mentions.users.first().id + message.guild.id}`, zaman1)
  
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
   let muteler = jdb.get(`tempmute`) || [];
                if (!muteler.some(j => j.id == kullanici.id)) {
                  kdb.add(`kullanici.${message.author.id}.mute`, 1);
                    db.add('case', 1)
                    const numara = await db.fetch('case')
                    moment.locale("tr");
                  kdb.push(`kullanici.${kullanici.id}.sicil`, {
                    Yetkili: message.author.id,
                    Sebep: sebep,
                    Ceza: "JAIL",
                    Süre: vakit,
                    cezano: numara,
                    Tarih: (`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}`) 
                  });
                };
kullanici.roles.add(cezalırol);
kullanici.roles.cache.forEach(r => {
kullanici.roles.remove(r.id)
db.set(`${message.guild.id}.jail.${kullanici.id}.roles.${r.id}`, r.id )})
moment.locale("tr");
jaillog.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('RANDOM').setTimestamp().setDescription(`<a:721033655883005994:739539711319605338> Bir Kullanıcı Hapishaneye Gönderildi. <a:721033655883005994:739539711319605338> \n\n <a:740691323585036379:744159361844248596> **Yetkili :** ${message.author} (\`${message.author.id}\`)\n <a:740691323585036379:744159361844248596> **Cezalandırılan Üye :** ${kullanici.user} (\`${kullanici.user.id}\`) \n <a:740691323585036379:744159361844248596> **Ceza Süresi :** \`${zaman1}\` \n <a:740691323585036379:744159361844248596> **Ceza Sebebi :** \`${sebep}\` \n <a:740691323585036379:744159361844248596> **Tarih:** \`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\``));
message.react('<a:Follia_Okok:801974890768367637>')
setTimeout(async () =>{
kullanici.roles.remove(cezalırol)
jaillog.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('RANDOM').setTimestamp().setDescription(`<a:siyahtik:738927302590595095> **Bir Kullanıcının Hapis Cezası Bitti.** <a:siyahtik:738927302590595095>\n **Cezası Biten Üye :** ${kullanici.user} (\`${kullanici.user.id}\`) \n **Ceza Süresi :** \`${zaman1}\` \n **Bitiş Tarihi :** \`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\` \n <a:Follia_Unlem:801974829120094228> **Umarım Tekrar Yaşanmaz** <a:Follia_Unlem:801974829120094228>`));
}, ms(zaman));
            setTimeout(async () =>{
message.guild.roles.cache.forEach(async r => {
const roller = await db.fetch(`${message.guild.id}.jail.${kullanici.id}.roles.${r.id}` )
if(roller != r.id)  return ;
if(roller){kullanici.roles.add(roller)}
db.delete(`${message.guild.id}.jail.${kullanici.id}.roles.${r.id}`)
})
              }, ms(zaman));

  
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['jail'],
    permLevel: 0,
}

exports.help = {
      name: "jail"  
  
}