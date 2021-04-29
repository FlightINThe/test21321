const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "warn",
  category: "moderation",
  usage: "warn <@mention> <reason>",
  description: "Warn anyone who do not obey the rules",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(
        "Sie sollten Nachricht verwalten Berechtigung haben, um diesen Befehl zu verwenden!"
      );
        }
        
  

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Bitte erwähnen Sie die Person, an die Sie warnen möchten- warn @erwähnen <Grund>"
      );
    }
    if (message.mentions.users.first().bot) {
      return message.channel.send("Du kannst keine Bots warnen!");
    }

    if (message.author.id === user.id) {
      return message.channel.send("Du kannst dich nicht selber warnen!");
    }

    if (user.id === message.guild.owner.id) {
      return message.channel.send(
        "Ich hasse dich!, warum warnst du den Server Owner?!"
      );
    }

    const reason = args.slice(1).join(" ");

    if (!reason) {
      return message.channel.send(
        "Bitte geben Sie einen Grund zur Warnung an - warn @erwähnung <Grund> "
      );
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(
        `Du wurdest in **${message.guild.name}** gewarnt für ${reason}`
      );
      await message.channel.send(
        `Du hast **${
          message.mentions.users.first().username
        }** gewarnt für ${reason}`
      );
    } else if(warnings !== null) {
      
      db.add(`warnings_${message.guild.id}_${user.id}`, 1);
      
      user.send(`Du wurdest gewarnt in  **${message.guild.name}** für ${reason}`);
      
      await message.channel.send(`Du hast **${message.mentions.users.first().username}** gewarnt für ${reason}`);
      
      message.delete
      
    }
  }
};
