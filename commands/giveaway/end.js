const { MessageEmbed } = require('discord.js')
const ms = require('ms');
module.exports = {
        name: "end",
        description: "Giveaway beenden",
        accessableby: "Administrator",
        category: "giveaway",
        aliases: ["giveaway-end"],
        usage: '<giveawaymessageid>',
    run: async (bot, message, args) => {
      if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: Sie müssen über die Berechtigung zum Verwalten von Nachrichten verfügen, um Giveaways erneut rollen zu können.');
    }

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send(':x: Sie müssen eine gültige Nachrichten-ID angeben!');
    }

    // try to found the giveaway with prize then with ID
    let giveaway = 
    // Search with giveaway prize
    bot.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    bot.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway){
        return message.channel.send('Es konnte kein Giveaway für gefunden werden `'+ args.join(' ') + '`.');
    }

    // Edit the giveaway
    bot.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    // Success message
    .then(() => {
        // Success message
        message.channel.send('Das Gewinnspiel endet in weniger als '+(bot.giveawaysManager.options.updateCountdownEvery/1000)+' seconds...');
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway mit Nachrichten-ID ${giveaway.messageID} ist bereits beendet.`)){
            message.channel.send('Dieses Giveaway ist bereits beendet!');
        } else {
            console.error(e);
            message.channel.send('Es ist ein Fehler aufgetreten...');
        }
    });
    }
}