const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.json");

module.exports = {
  name: "titssize",
  aliases: ["tits"],
  description: "Show Member PP Size!",
  usage: "Dicksize <Mention Member>",
  run: async (client, message, args) => {
    //Start
    let sizes = [
    
      "(_----------------------------_)",
      "(_-------------------------------------------------_)"
    ];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = sizes[Math.floor(Math.random() * sizes.length)];

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Titen v8 Maschine`)
      .setDescription(`${Member.user.username} Titen größe ist\n${Result}`)
      .setFooter(`Angefordert von ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};