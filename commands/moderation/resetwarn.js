const db = require("quick.db");

module.exports = {
  name: "resetwarns",
  aliases: ["rwarns", "rsetwarns"],
  category: "moderation",
  usage: "rwarns <@user>",
  description: "Reset warnings of mentioned person",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(
        "Sie sollten Nachrichten Verwalten berechtigung haben, um diesen Befehl verwenden zu können"
      );
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("Bitte geben Sie die Person an, deren Warnung Sie zurücksetzen möchten");
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send("Bot dürfen keine Warnungen haben");
    }

    if (message.author.id === user.id) {
      return message.channel.send("Sie dürfen Ihre Warnungen nicht zurücksetzen");
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} hatte keine Warnungen`);
    }

    db.delete(`warnings_${message.guild.id}_${user.id}`);
    user.send(
      `All deiner Warnungen werden zurückgesetzt von ${message.author.username} from ${message.guild.name}`
    );
    await message.channel.send(
      `Alle Warnungen wurden zurückgesetzt von ${message.mentions.users.first().username}`
    );
  }
};
