const db = require('quick.db')

module.exports = {
    name : 'captcha',
    run : async(client, message, args) => {
        if(args[0] === 'on') {
            await db.set(`captcha-${message.guild.id}`, true)
            message.channel.send('Captcha-Funktion aktiviert')
        } else if(args[0] === 'off') {
            await db.delete(`captcha-${message.guild.id}`)
            message.channel.send('Captcha-Funktion deaktiviert')
        }
    }
}
