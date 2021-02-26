const Discord = require("discord.js")
module.exports = class {
    constructor(client) {
      this.client = client;
    }
  
    async run(oldMessage, newMessage) {

        if (oldMessage.content == newMessage.content) {
            return;
        }
        var logchannel = this.client.channels.get("792501554116427797");
        let logembed = new Discord.RichEmbed()
            .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
            .setColor("#ffa300")
            .setThumbnail(oldMessage.author.avatarURL)
            .setDescription("Message édité")
            .addField("Avant", oldMessage.content, true)
            .addField("Après", newMessage.content, true)
            .setTimestamp()
        logchannel.send(logembed)

    }
  };