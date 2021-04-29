
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "meeting",
  aliases: ["amongusmeeting", "mtg"],
  category: "Image",
  description: "Geben Sie ein Meeting-Bild für uns zurück!",
  usage: "Meeting <Text>",
  run: async (client, message, args) => {
    
    const Value = args.join(" ");

    if (!Value || Value.length > 150) return message.channel.send("Bitte geben Sie einen Besprechungstext und stellen Sie sicher, dass er nicht mehr als 150 Zeichen lang ist!"); 

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Emergency Meeting (" + message.author.username + ")")
    .setImage(encodeURI(`https://vacefron.nl/api/emergencymeeting?text=${Value}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
