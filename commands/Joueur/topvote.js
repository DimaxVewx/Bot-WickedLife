const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class Topvote extends Command {
    constructor(client) {
        super(client, {
            name: "topvote",
            description: "Obtenir le Top Serveur du serveur.",
            usage: "topvote",
            category: "Catégorie | Joueur",
            guildOnly: true,
            permLevel: "Joueur"
        });
    }

    run(message, args, level) {

        let topvote = new Discord.RichEmbed()
            .setColor("#ffa300")
            .setAuthor(this.client.user.username, this.client.user.displayAvatarURL)
            .setTitle(`Vous pouvez voter tout les 2Heures par adresse ip et récupérer une récompense.`)
            .setFooter('Vous devez écrire votre nom steam pour recevoir la récompense')
            .setDescription(`https://top-serveurs.net/gta/wickedliferp`)
            
            message.channel.send(topvote);

        
    }
}

module.exports = Topvote;