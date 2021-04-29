module.exports = {
  name: "clear",
  aliases:["c", "purge"],
  category: "moderation",
  description: "Löschen Sie Massennachrichten mit 1 Command",
  run: async (client, message, args) => {
    
            
    if (message.deletable) {
        message.delete();
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Fehlende Berechtigungen!").then(m => m.delete(5000));
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("Dies ist keine Zahl").then(m => m.delete(5000));
    }

    let deleteAmount;
    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
    .catch(err => message.reply(`Etwas ist schief gelaufen... ${err}`));
    
  }
}
