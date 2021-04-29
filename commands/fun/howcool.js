const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.json");

module.exports = {
  name: "howcool",
  aliases: [],
  description: "Show How Gay Member Is!",
  usage: "Howgay <Mention Member>",
  run: async (client, message, args) => {
    //Start
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = Math.floor(Math.random() * 201);

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Cool v8 Maschine`)
      .setDescription(`${Member.user.username} ist ${Result}% Cool`)
      .setFooter(`Angefordert von ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};