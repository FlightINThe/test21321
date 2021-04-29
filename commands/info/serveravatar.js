const discord = require("discord.js")

module.exports = {
  name: "servericon",
  aliases: ["sav", "guildavatar"],
  category: "info",
  description: "Holen Sie sich den Avatar des Servers",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    
      embed.setDescription(`[Download](${message.guild.iconURL({ dynamic: true, size: 1024 })})`)
      embed.setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
      embed.setColor("RANDOM")
    
      message.channel.send(embed)
    
  }
}