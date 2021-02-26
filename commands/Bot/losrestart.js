const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class RestartIG extends Command {
    constructor(client) {
        super(client, {
            name: "losrestart",
            description: "Envoyez un message en passant par le bot discord",
            usage: "losrestart",
            guildOnly: true,
            category: "Catégorie | Responsable",
            permLevel: "Responsable"
        });
    }

    async run(message) {
        message.delete()

        
        const toucheig = new Discord.RichEmbed()
        .setTitle(`Restart | IG`, true)
        .setColor("#ffa300")
        .setDescription(`

       **Heure française !**
    ( une fois toute les 24H... )

       **5:00**   ➡ Redémarrage.
       **9:00**   ➡ Redémarrage.
       **14:00**  ➡ Redémarrage.
       **20:00**  ➡ Redémarrage.
       
    Il faut bien se déconnecter avant pour pas tout perdre ! 
    Aucun remboursement ne sera fait si c'est le cas.


        `);

        message.channel.send(toucheig)
        


    }
}

module.exports = RestartIG;