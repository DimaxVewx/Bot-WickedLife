const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class Twitter extends Command {
    constructor(client) {
        super(client, {
            name: "twitter",
            description: "Obtenir le twitter du serveur.",
            usage: "twitter",
            category: "Catégorie | Joueur",
            guildOnly: true,
            permLevel: "Joueur"
        });
    }

    run(message, args, level) {

        let tweet = new Discord.RichEmbed()
            .setColor("#ffa300")
            .setAuthor(this.client.user.username, this.client.user.displayAvatarURL)
            .setTitle(`Suivez notre twitter pour plein de concours et autres.`)
            .setDescription(`https://twitter.com/wickedlife`)

            message.channel.send(tweet);

        
    }
}

module.exports = Twitter;