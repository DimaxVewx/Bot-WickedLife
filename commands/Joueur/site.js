const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class Site2 extends Command {
    constructor(client) {
        super(client, {
            name: "site",
            description: "Obtenir le site du serveur.",
            usage: "site",
            category: "Catégorie | Joueur",
            guildOnly: true,
            permLevel: "Joueur"
        });
    }

    run(message, args, level) {

        let site = new Discord.RichEmbed()
            .setColor("#ffa300")
            .setAuthor(this.client.user.username, this.client.user.displayAvatarURL)
            .setTitle(`Le site est super important pour des actions en dehors.`)
            .setDescription(`https://wickedlife.net/`)

            message.channel.send(site);

        
    }
}

module.exports = Site2;