const db = require('quick.db')
const { getInfo } = require("../../handlers/xp.js")
const canvacord = require("canvacord");
const Discord = require("discord.js");
module.exports = {
  name: "level",
  aliases: ["lvl", "rank"],
  description: "Holen Sie sich die Ebene des Autors oder Erwähnten",
  usage: "level [user]",
  category: "info",
  run: (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    
    if(user.id === client.user.id) { //IF BOT
      return message.channel.send("😉 | Ich bin auf Level 100")
    }
    
    if(user.bot) {
      return message.channel.send("Bot haben keine Levels")
    }
    
    let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0;
    
    const {level, remxp, levelxp} = getInfo(xp);
    
const rank = new canvacord.Rank()
    .setAvatar(user.displayAvatarURL({dynamic: false,  format: 'png'}))
    .setCurrentXP(remxp)
    .setRequiredXP(levelxp)
    .setLevel(level)
    .setStatus(user.presence.status)
    .setProgressBar("#00FFFF", "COLOR")
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setRank(1, "a", false)
    .setBackground("IMAGE", "https://cdn.discordapp.com/attachments/823585354569351208/824643721492168754/image0.jpg");

rank.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "automodRankcard.png");
        message.channel.send(attachment);
    });   
    
    
    
    
  }
}
