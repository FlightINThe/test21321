const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "Lade Kiel Studios Bot ein",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HIER LADEN SIE DEN BOT-LINK EIN`)
    .setDescription(`<:greenTick:822101337436323851> [KLICKEN SIE HIER](https://discord.com/api/oauth2/authorize?client_id=744597377406599188&permissions=8&scope=bot)`)
    .setColor("RANDOM")
    .setFooter(`made by ItzThePlaneSpotter `)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}