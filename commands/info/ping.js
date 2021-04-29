const discord = require("discord.js");

module.exports = {
  name: "ping",
  category: "info",
  description: "Gibt Latenz und API-Ping zurück",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setDescription(`Pong - ${client.ws.ping}ms`)
    .setColor("RANDOM")
    .setFooter(`Angefordert von ${message.author.username}`)
    
    message.channel.send(embed)
  }
}