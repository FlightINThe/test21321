const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

module.exports = {
  name: "cry",
  category: "fun",
  description: "Weinen Sie mit GIF",
  run: async (client, message, args) => {
    
    let data = await random.getAnimeImgURL("cry");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`Bitte sprechen Sie mit ${message.author.username} er weint gerade`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};