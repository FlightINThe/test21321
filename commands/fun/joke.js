const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
  name: "joke",
  category: "fun",
  description: "Holen Sie sich ein paar lustige Witze",
  run: async (client, message, args) => {
    
    let data = await random.getJoke()
    message.channel.send(data)
    
  }
}