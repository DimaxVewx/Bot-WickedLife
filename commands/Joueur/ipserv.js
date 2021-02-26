const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class Play extends Command {
    constructor(client) {
        super(client, {
            name: "connect",
            description: "Obtenir l'ip du serveur",
            usage: "connect",
            category: "Catégorie | Joueur",
            guildOnly: true,
            permLevel: "Joueur"
        });
    }

    run(message, args, level) {

        let playgame = new Discord.RichEmbed()
            .setColor("#ffa300")
 
            .addField(`F8 et entrer ce lien:`, `**connect __cfx.re/join/g4vpd9__**`, true)
            .setThumbnail('https://cdn.discordapp.com/attachments/791974766440742912/792358350188707840/WickedLife-01_1.jpg')
            message.channel.send(playgame);

        
    }
}

module.exports = Play;