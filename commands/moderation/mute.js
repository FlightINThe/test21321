const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  aliases: ["mutes", "muted"],
  category: "moderation",
  description: "muet",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("Entschuldigung, Sie benötigen die Erlaubnis, jemanden stumm zu schalten");
    }
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("Ich habe keine Erlaubnis zum Stummschalten");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("\```Bitte erwähnen Sie die Mitglieder für stumm\```");
    }
    if (user.id === message.author.id) {
      return message.channel.send("Ich kann Sie nicht stumm schalten, weil Sie der Nachrichtenautor sind");
    }
    let reason = args.slice(1).join("");

    if (!reason) {
      return message.channel.send(" \``` Bitte geben Sie einen Grund für die Stummschaltung an\``` ");
    }

    const vrole = user.roles.cache

    let muterole = message.guild.roles.cache.find(x => x.name === "muted");

    if (!muterole) {
      return message.channel.send("\```Bitte erstellen Sie einen Rollennamen mit muted \``` ");
    }
    
    await user.roles.remove(vrole);
    await user.roles.add(muterole);

    await message.channel.send(
      `du hast stumm geschaltet ${message.mentions.users.first().username} für ${reason}`
    );

    user.send(`Sie werden stummgeschaltet in ${message.guild} für ${reason}`
    );
  }
};
