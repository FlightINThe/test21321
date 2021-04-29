const { MessageEmbed } = require("discord.js")
const moment = require('moment')

module.exports = {
name: "kick",
category: "moderation",
description: "einen Benutzer kicken",
cooldown: 5,
userPerms: ["KICK_MEMBERS"],
clientPerms: ["KICK_MEMBERS"],
run: async(client, message, args) => {  
const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
const reason = args.slice(1).join(" ")
          if (!args[0]) return message.channel.send(":x: | **Geben Sie jemanden an, der gekickt werden soll.**")
        if (!mentionedMember) return message.channel.send(":x: | **I can't find that member.**")
        if (mentionedMember.id === message.author.id) return message.channel.send(":x: | Du kannst dich nicht selbst kicken.")
        if (mentionedMember.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.owner.id) {
            return message.channel.send(":x: | ** Sie können dieses Mitglied nicht kicken, da Ihre Rolle niedriger als diese Mitgliedsrolle ist.**")
        }
        if (mentionedMember.kickable) {
            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} - (${message.author.id})`, message.author.displayAvatarURL({dynamic: true}))
            .setThumbnail(mentionedMember.user.displayAvatarURL({dynamic: true}))
            .setColor(`RANDOM`)
            .setDescription(`
**Member:** ${mentionedMember.user.username} - (${mentionedMember.user.id})
**Grund:** ${reason || "Keine"}
            `)
        message.channel.send(embed)
        mentionedMember.kick()
        } else {
            return message.channel.send(":x: | **Ich kann diesen Benutzer nicht kicken, um sicherzustellen, dass die Benutzerrolle niedriger als meine Rolle ist.**")
        }
        return undefined
    }
}