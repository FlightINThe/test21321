const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
 
module.exports = {
  name: "suggest",
  category:"suggestion",
  
  run: async (client, message, args) => {
   
  let channel = await db.fetch(`suggestion_${message.guild.id}`);
    if (channel === null) return;
  
  const suggestionQuery = args.join(" ");
  if(!suggestionQuery) return message.reply("Bitte schlagen Sie etwas vor.");
    
  const embed = new MessageEmbed()
         
       .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
       .setDescription(`${suggestionQuery}`)
       .setColor("00FFFF")
       .setFooter("Status: Ausstehend")
       .setTimestamp();
       
    const done = new MessageEmbed()
       .setDescription(`<:bfdyes:832931453892558848>  | Your suggestion is Submitted here, <#${channel}>\n\nHinweis: Sie haben zugestimmt, eine DM für eine Antwort auf Ihren Vorschlag zu erhalten!`)
       .setColor("00FFFF")
       
    message.channel.send(done)
    
    let msgEmbed = await message.guild.channels.cache.get(channel).send(embed)
    
    await msgEmbed.react('<:upvote:832931955556745236>')
    await msgEmbed.react('<:downvote:832931677294428161> ')
  }
}