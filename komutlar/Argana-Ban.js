const { MessageEmbed } = require('discord.js');
const data = require('quick.db')
const moment = require('moment')
const Argana = new data.table("cezalar");
const Argana2 = new data.table("kullanici");
exports.run = async (client, message, args) => {

  
//-------------------------------------------------------------------------------\\  

if(!["Yetkili Rol ID"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author} Komutu Kullanmak İçin Yetkin Bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
const banlog = message.guild.channels.cache.find(c => c.id === 'Ban Log ID')//Ban log kanalı  
  
//-------------------------------------------------------------------------------\\


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
  
if (args[0] && (args[0].includes('bilgi') || args[0].includes('info'))){
if(!args[1] || isNaN(args[1])) return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Geçerli Bir Ban Yemiş Kullanıcı ID'si Belirtmelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
return message.guild.fetchBan(args.slice(1).join(' ')).then(({ user, reason }) => message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x330033').setTimestamp().setDescription(`**Banlanan Üye:** ${user.tag} (\`${user.id}\`)\n**Ban Sebebi:** ${reason ? reason : "Belirtilmemiş!"}`))).catch(err => message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp().setDescription("Belirtilen ID numarasına sahip bir ban bulunamadı!")).then(x => x.delete({timeout: 5000})));
}
  
let kullanici = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
let sebep = args.splice(1).join(" ")
if(!kullanici) return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Bir Kullanıcı Etiketlemelisin!`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(!sebep) return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Bir Sebep Belirtmelisin!`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(message.member.roles.highest.position <= kullanici.roles.highest.position) return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Etiketlenen Kullanıcı Sizden Üst Veya Aynı Pozisyondadır!`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(!kullanici.bannable)return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Etiketlenen Kullanıcı Yasaklanamaz!`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === message.author.id)return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Kendini Sunucudan Yasaklayamazsın!`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === client.user.id)return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Bir Botu Sunucudan Yasaklayamazsın!`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === message.guild.OwnerID) return message.channel.send(new MessageEmbed().setDescription(`<a:Follia_nonono:801974806086025246> ${message.author}, Sunucu Sahibini Sunucudan Yasaklayamazsın!`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
kullanici.ban({reason: sebep}).then(x => message.react('<a:721033655883005994:739539711319605338>')).catch();
    let muteler = Argana.get(`tempmute`) || [];
                if (!muteler.some(j => j.id == kullanici.id)) {
                    Argana2.add(`kullanici.${message.author.id}.mute`, 1);
                    data.add('case', 1)
                    const numara = await data.fetch('case')
                      moment.locale("tr");
                    Argana2.push(`kullanici.${kullanici.id}.sicil`, {
                    Yetkili: message.author.id,
                    Sebep: sebep,
                    Ceza: "BAN",
                    Süre: "Sınırsız",
                    cezano: numara,
                    Tarih: (`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}`) 
                  });
                };    
message.channel.send(new MessageEmbed().setDescription(`<a:721033655883005994:739539711319605338> Bir Kullanıcı Sunucudan Yasaklandı. <a:721033655883005994:739539711319605338> \n\n <a:740691323585036379:744159361844248596> **Yetkili :** ${message.author} (\`${message.author.id}\`) \n <a:740691323585036379:744159361844248596> **Yasaklanan Üye :** ${kullanici} (\`${kullanici.user.id}\`) \n <a:740691323585036379:744159361844248596> **Uygulanan Ceza :** Sunucudan Yasaklama \n <a:740691323585036379:744159361844248596> **Yasaklanma Sebebi :** \`${sebep}\` \n <a:740691323585036379:744159361844248596> **Yasaklama Tarihi :** \`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\``).setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x348f36').setTimestamp()) 
banlog.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('RANDOM').setTimestamp().setDescription(`<a:721033655883005994:739539711319605338> **Sunucudan Yasaklandı !**\n\n <a:721033655883005994:739539711319605338> **Yetkili:** ${message.author} (\`${message.author.id}\`)\n <a:721033655883005994:739539711319605338> **Banlanan Üye:** ${kullanici.user.tag} (\`${kullanici.user.id}\`)\n <a:721033655883005994:739539711319605338> **Yasaklanma Sebebi :** \`${sebep}\` \n <a:721033655883005994:739539711319605338> **Tarih:** \`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\` `));
}

exports.conf = {
    aliases: ['yasakla'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ban'
  };