const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')

module.exports = {
    name: 'hack',
    category: 'fun',
    
run: async (client, message, args) => {
    
       
       const user = await message.mentions.users.first()
        if(!user) return message.channel.send("Woaaah langsamer, wen hacken wir? Es sollte ein Mitglied sein, keine Rolle.")
        

        message.channel.send(`Hackt @${user.username} jetzt...`)
        .then((msg) => {
            setTimeout(function() {
            msg.edit(`[▝]Findet seine IP Adresse`);
          }, 1500)
            setTimeout(function() {
            msg.edit(`[▗] **IP ADDRESSE** : 127.0.0.1:2643`);
          }, 3000)
          setTimeout(function() {
            msg.edit(`[▖] Verkauf von Daten an die Regierung ...`);
          }, 4500)
          setTimeout(function() {
            msg.edit(`[▘] Meldet Konto zur Discord wegen Verstoßes gegen die Nutzungsbedingungen..`);
          }, 6000)
          setTimeout(function() {
            msg.edit(`[▝] Findet E-Mail Adresse.....`);
          }, 7500)
          setTimeout(function() {
            msg.edit(`[▗] **Email Addresse** : ${user.username}@gmail.com`);
          }, 9000)
          setTimeout(function() {
            msg.edit(`[▖] Hacking Epic Games Account...`);
          },  10500)
          setTimeout(function() {
            msg.edit(`[▘] Hacking medizinische Aufzeichnungen...`);
          },  12000)
         setTimeout(function() {
            msg.edit(`Hacking beendet @${user.username}`);
         }, 13500)
         setTimeout(function() {
            message.channel.send('Der *total* "echte" und "gefährliche" Hack ist abgeschlossen')
         }, 15000)
         });


    }
}