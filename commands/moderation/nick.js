const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "nick",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const member = message.mentions.members.first();

    if (!member) return message.reply("Bitte geben Sie ein Mitglied an!");

    const arguments = args.slice(1).join(" ");

    if (!arguments) return message.reply("Bitte geben Sie einen Nicknamen an!");

    try {
      member.setNickname(arguments);
    } catch (err) {
      console.log(err);
      message.reply(
        "Ich habe keine Berechtigung zum Festlegen des " + member.toString() + " nicknames!"
      );
    }
  },
};
