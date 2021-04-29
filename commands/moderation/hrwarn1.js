const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "hrwarn1",
  aliases: ["mutes", "muted"],
  category: "moderation",
  description: "muet",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("Entschuldigung, Sie benötigen die Erlaubnis, jemanden hr zu warnen");
    }
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("Ich habe keine Erlaubnis zum Hr warnen");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("\```Bitte erwähnen Sie ein Staff Member für Hr Warn 1\```");
    }
    if (user.id === message.author.id) {
      return message.channel.send("Ich kann Sie nicht hr warnen, weil Sie der Nachrichtenautor sind");
    }
    let reason = args.slice(1).join("");

    if (!reason) {
      return message.channel.send(" \``` Bitte geben Sie einen Grund für die Hr Warn an\``` ");
    }

    const vrole = user.roles.cache

    let muterole = message.guild.roles.cache.find(x => x.name === "HR warn 1");

    if (!muterole) {
      return message.channel.send("\```Bitte erstellen Sie einen Rollennamen mit HR warn 1 \``` ");
    }
    
    await user.roles.add(muterole);

    await message.channel.send(
      `Du hast ${message.mentions.users.first().username} hrwarn1 für ${reason}`
    );

    user.send(`Du wurdest in ${message.guild} hr warn 1 gewarnt für ${reason}`
    );
  }
};
