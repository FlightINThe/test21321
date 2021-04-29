const { MessageEmbed } = require('discord.js')
const ms = require('ms');
module.exports = {
    name: "start",
        description: "Giveaway erstellen",
        accessableby: "Administrator",
        category: "giveaway",
        aliases: ["giveaway-start"],
        usage: '<channel> <duration> <winners>, <prize>',
    run: async (bot, message, args) => {
       if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: Sie müssen über die Berechtigung zum Verwalten von Nachrichten verfügen, um Giveaways starten zu können.');
    }

    // Giveaway channel
    let giveawayChannel = message.mentions.channels.first();
    // If no channel is mentionned
    if(!giveawayChannel){
        return message.channel.send(':x: Sie müssen einen gültigen Kanal angeben!');
    }

    // Giveaway duration
    let giveawayDuration = args[1];
    // If the duration isn't valid
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(':x: Sie müssen eine gültige Dauer angeben!');
    }

    // Number of winners
    let giveawayNumberWinners = args[2];
    // If the specified number of winners is not a number
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send(':x: Sie müssen eine gültige Anzahl von Gewinnern angeben!');
    }

    // Giveaway prize
    let giveawayPrize = args.slice(3).join(' ');
    // If no prize is specified
    if(!giveawayPrize){
        return message.channel.send(':x: Sie müssen einen gültigen Preis angeben!');
    }

    // Start the giveaway
    bot.giveawaysManager.start(giveawayChannel, {
        // The giveaway duration
        time: ms(giveawayDuration),
        // The giveaway prize
        prize: giveawayPrize,
        // The giveaway winner count
        winnerCount: giveawayNumberWinners,
        // Who hosts this giveaway
        hostedBy: message.author,
        // Messages
        messages: {
            giveaway: "🎉🎉 **GIVEAWAY** 🎉🎉",
            giveawayEnded: "🎉🎉 **GIVEAWAY BEENDET** 🎉🎉",
            timeRemaining: "Verbleibende Zeit: **{duration}**!",
            inviteToParticipate: "Reagiere mit 🎉 um teilzunehmen!",
            winMessage: "CHerzliche Glückwünsch, {winners}! Du hast **{prize}** gewonnen!",
            embedFooter: "Giveaways",
            noWinner: "Giveaway abgesagt, keine gültigen Teilnahmen.",
            hostedBy: "Veranstaltet von: {user}",
            winners: "Gewinner",
            endedAt: "Beendet bei",
            units: {
                seconds: "sekunden",
                minutes: "minuten",
                hours: "stunden",
                days: "tagen",
                pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
            }
        }
    });

    message.channel.send(`Giveaway gestartet in ${giveawayChannel}!`);

    }
}