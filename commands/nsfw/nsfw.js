const discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "nsfw",
  aliases: [],
  category: "nsfw",
  description: "Get some wallpapers",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      return message.reply("Dieser Kanal unterstützt keine nsfw-Inhalte")
      
    } else {
    
    let akanekoSan = new discord.MessageEmbed()
    akanekoSan.setColor("RANDOM")
    akanekoSan.setImage(akaneko.lewdneko());
    return message.channel.send(akanekoSan);
      
    }
  }
}
