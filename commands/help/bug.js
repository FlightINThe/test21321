module.exports = {
  name: "bug",
category: "info",
run : async(client, message, args) => { 
// again make this fit your command handler style 😀
  if (!args[0]) return message.reply("Bitte geben Sie den Fehler an.");   
  if (args[0] === "bug") return message.reply("Bitte geben Sie den Fehler an.");   
  args = args.join(" ");   
  message.reply("Vielen Dank für das Absenden eines Fehlers!");  
  const content = `\`\`\`**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**\`\`\``;   
  client.channels.cache.get('771746665966600223').send(content)
}
}