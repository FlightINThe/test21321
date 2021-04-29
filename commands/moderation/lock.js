const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "lock",
    description: "Locks a given channel for a particular role!",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Sie haben keine Berechtigung, um dieses Cmd zu verwenden!")
        const channel = message.mentions.channels.first()
        if(!channel) return message.reply("Bitte geben Sie einen gültigen Kanal an!")
        const roletofind = args.slice(1).join(" ")
        const role = message.guild.roles.cache.find(r => r.id === roletofind)
        if(!role) return message.reply("Bitte geben Sie eine gültige Rollen-ID an!")
        let embed = new MessageEmbed()
        .setTitle("Kanal gesperrt!")
        .setDescription(`Dieser Kanal wurde gesperrt von ${message.author.tag}`)
        .setTimestamp()
        channel.updateOverwrite(role, {
            SEND_MESSAGES: false
        })
        await channel.send(embed)
    }
}