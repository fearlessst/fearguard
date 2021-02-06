// -- ARGANA -- \\

const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  const Argana2 = db.fetch(`afkid_${message.author.id}_${message.guild.id}`);
  if (Argana2) return;
  const sebep = args[0];
  if (!args[0]) {
    let kullanıcı = message.guild.members.cache.get(message.author.id);
    const b = kullanıcı.displayName;

    await db.set(
      `afkSebep_${message.author.id}_${message.guild.id}`,
      "Sebep Girilmemiş"
    );
    await db.set(
      `afkid_${message.author.id}_${message.guild.id}`,
      message.author.id
    );
    await db.set(`afkAd_${message.author.id}_${message.guild.id}`, b);

    const Argana = await db.fetch(
      `afkSebep_${message.author.id}_${message.guild.id}`
    );

   message.channel.send(new MessageEmbed().setColor('BLACK').setDescription(`<a:sartik:738927351525670972> ${kullanıcı} Başarıyla Afk Oldunuz Afk Olmanızın Sebebi: **${Argana}**`));

    message.member.setNickname(`[AFK]` + b);
  }
  if (args[0]) {
    let sebep = args.join(" ");
    let kullanıcı = message.guild.members.cache.get(message.author.id);
    const b = kullanıcı.displayName;
    await db.set(`afkSebep_${message.author.id}_${message.guild.id}`, sebep);
    await db.set(
      `afkid_${message.author.id}_${message.guild.id}`,
      message.author.id
    );
    await db.set(`afkAd_${message.author.id}_${message.guild.id}`, b);
    const Argana = await db.fetch(
      `afkSebep_${message.author.id}_${message.guild.id}`
    );

   message.channel.send(new MessageEmbed().setColor('BLACK').setDescription(`<a:sartik:738927351525670972> ${kullanıcı} Başarıyla Afk Oldunuz Afk Olmanızın Sebebi: **${Argana}**`));

    message.member.setNickname(`[AFK]` + b);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Afk"],
  permLevel: 0
};

exports.help = {
  name: "afk",
  description: "Afk Olmanızı Sağlar.",
  usage: "afk / afk <sebep>"
};

