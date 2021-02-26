const Discord = require("discord.js")
module.exports = class {
    constructor(client) {
      this.client = client;
    }
  
    async run(message) {
        var logchannel = this.client.channels.get("792501554116427797");
        let logembed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setColor("#ffa300")
            .setThumbnail(message.author.avatarURL)
            .setDescription("Message supprimé")
            .addField("Message", message.content, true)
            .setTimestamp()
        logchannel.send(logembed)
    }
  };