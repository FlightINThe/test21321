const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "setsuggest",
    category: "suggestion",
    usage: "setsuggest <#channel>",
    authorPermission: ["MANAGE_GUILD"],
    run: async (client, message, args) => {

        let Channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

        if (!Channel) return message.channel.send(`Bitte erwähne einen Kanal!`);

        if (Channel.type === "voice") return message.channel.send(`Bitte erwähnen Sie einen Textkanal!`);

        await db.set(`suggestion_${message.guild.id}`, Channel.id);

        let Embed = new MessageEmbed()
        .setColor("00FFFF")
        .setDescription(`Der Vorschlagskanal ist festgelegt als <#${Channel.id}>`)

        return message.channel.send(Embed);

    }
};