const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class Patch extends Command {
    constructor(client) {
        super(client, {
            name: "patchnote",
            description: "Envoyez votre contrendu de développeur ici.",
            usage: "patchnote",
            guildOnly: true,
            category: "Catégorie | Modo",
            permLevel: "Modo"
        });
    }

    async run(message, args) {

      var patchnotec = this.client.channels.get("769629350449643521");
        message.delete();

        let botmessage = args.join(" ");
        if (!botmessage) return message.channel.send('`Vous devez indiquer un message a répéter`')


        patchnotec.send({embed: {
            author: {
              color: 3447003,
              name: message.author.username,
              icon_url: message.author.avatarURL
            },
            title: "Patch-Note",
            url: "http://wickedlife.net",
            description: "Contrendu du patch note d'aujourd'hui merci de lire attentivement.",
            fields: [
              {
                name: "Aujourd'hui:",
                value: `${botmessage}`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: this.client.user.avatarURL,
              text: "© wickedlifeRP"
            }
          }
        });

    }
}

module.exports = Patch;