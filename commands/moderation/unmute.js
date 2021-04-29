const db = require("quick.db");

module.exports = {
  name: "unmute",
  category: "moderation",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(
        "Entschuldigung, aber Sie haben keine Erlaubnis, die Stummschaltung aufzuheben"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("Ich habe keine Berechtigung zum Verwalten von Rollen.");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("Bitte geben Sie das Mitglied an, für das Sie die Stummschaltung aufheben möchten");
    }

    let muterole = message.guild.roles.cache.find(x => x.name === "muted");

    if (user.roles.cache.has(muterole)) {
      return message.channel.send("gegebene Benutzer haben keine muted Rolle, also was soll ich nehmen");
    }

    user.roles.remove(muterole)

    await message.channel.send(`**${message.mentions.users.first().username}** ist jetzt nicht mehr gestummgeschaltet`);

    user.send(`Sie sind jetzt nicht stummgeschaltet von **${message.guild.name}**`);
    
    message.delete()
  }
};
