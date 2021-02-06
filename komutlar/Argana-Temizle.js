const { MessageEmbed } = require("discord.js");
exports.run = async(client, message, args, ayar, emoji) => {
  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('RANDOM').setTimestamp();
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed.setDescription("<a:Follia_Nono:801974900788953108> Bu Komutu Kullanabilmek İçin **Mesajları Yönet** İznine Sahip Olmalısın!")).then(x => x.delete({timeout: 5000}));
  if(!args[0] || (args[0] && isNaN(args[0])) || Number(args[0]) < 1 || Number(args[0]) > 100) return message.channel.send(embed.setDescription("<a:8840_wumpus:718482811803271208> 1-100 Arasında Silinecek Mesaj Miktarı Belirtmelisin!")).then(x => x.delete({timeout: 5000}));
  await message.delete().catch();
  message.channel.bulkDelete(Number(args[0])).then(msjlar => message.channel.send(embed.setDescription(`<a:Follia_Okok:801974890768367637> **${msjlar.size}** Adet Mesaj Başarıyla Silindi! <a:Follia_Okok:801974890768367637>`)).then(x => x.delete({timeout: 5000}))).catch()
};
exports.conf = {
    aliases: ["sil", 'clear'],
    usage: "temizle 1-100",
    description: "Belirtilen mesaj sayısı kadar mesaj temizler."
}

exports.help = {
    name: "temizle",
};
