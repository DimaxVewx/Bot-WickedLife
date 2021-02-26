const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class LosVote extends Command {
    constructor(client) {
        super(client, {
            name: "losvote",
            description: "Envoyez un message en passant par le bot discord",
            usage: "losvote",
            guildOnly: true,
            category: "Catégorie | Responsable",
            permLevel: "Responsable"
        });
    }

    async run(message) {
        message.delete()

        const lienvote = "https://top-serveurs.net/gta/wickedlife-roleplay";
        const timer = "Toute les 2 heures."
        const gift = "**250$ en jeu !**"
        const rules = "Il faut mettre son pseudo **STEAM** pour récuperer la récompense."
        
        const losvote = new Discord.RichEmbed()
        .setTitle(`Vote | wickedlife`, true)
        .setColor("#ffa300")

        .setDescription(`Votez pour le serveur dès aujourd'hui !`, true)

        .addField(`Votez pour le serveur vous permez de récompérer `, gift)

        .addField(`Sur ce lien là: `, lienvote)
        .addField(`Attention c'est,`,timer)

        .addField(`**Condition Récompense ! **`, rules)

        message.channel.send(losvote)
        


    }
}

module.exports = LosVote;