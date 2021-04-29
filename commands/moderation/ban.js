const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Banne einen User",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
    
    const target = message.mentions.members.first()
    
    const reason = args.slice(1).join(" ")
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Sie haben keine Berechtigung, diesen Befehl zu verwenden!`)
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply(`Ich habe keine Erlaubnis, jemanden zu bannen`)
    
    if(!args[0]) return message.reply(`Bitte erwähnen Sie jemanden, der gebannt werden soll`)
    
    if(!target) return message.reply(`Ich kann dieses Mitglied nicht finden`)
    
    
    
    if(target.id === message.author.id) return message.reply(`Ich kann dich nicht bannen, da du der Server Owner bist`)
    
    if(target.bannable) {
      let embed = new discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`Banned \`${target}\` for \`${reason || "Kein Grund angegeben"}\``)
      
      message.channel.send(embed)
      
      target.ban()
      
      message.delete()
      
    } else {
      return message.reply(`Ich kann den nicht bannen, stelle sicher, dass meine Rolle über ihrer liegt`)
    }
    return undefined
  }
};