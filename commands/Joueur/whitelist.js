const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class Form extends Command {
    constructor(client) {
        super(client, {
            name: "whitelist",
            description: "Obtenir le formulaire du serveur.",
            usage: "whitelist",
            category: "Catégorie | Joueur",
            guildOnly: true,
            permLevel: "Joueur"
        });
    }

    run(message, args, level) {

        let formulaire = new Discord.RichEmbed()
            .setAuthor(this.client.user.username, this.client.user.displayAvatarURL)
            .setColor("#ffa300")
            .setTitle(`Pour avoir accès au serveur, il faut remplir le formulaire en bas.`)
            .setDescription(`https://wickedlife.fr/form`)

            message.channel.send(formulaire);

        
    }
}

module.exports = Form;