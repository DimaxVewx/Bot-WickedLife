const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class DouaneON extends Command {
    constructor(client) {
        super(client, {
            name: "douaneon",
            description: "Envoyez un message dans le chat darknet.",
            usage: "douaneon",
            guildOnly: true,
            category: "Catégorie | Douanier",
            permLevel: "Douanier"
        });
    }

    async run(message, args) {
        var douanec = this.client.channels.get("693421971312214026");

        message.delete();

        let douaneopen = new Discord.RichEmbed()
        .setTitle(`Douane | Ouverte 📺`)
        .setColor("#ffa300")
        .addField(`Votre ticket pour la whitelist:`, `https://wickedlife.fr/profile/profile`)
        .addField(`Le règlement du serveur:`, `https://wickedlife.fr/rules`)
 
        .setDescription(`Douanier qui s'occupe de la douane: **${message.author}**.
        

        
        `);
        message.channel.send('@Joueur');
        message.delete(1);

        //let douaneon = args.join(" ");
        //if (!botmessage) return message.channel.send(`Veuillez entrer un message pour l'envoyer dans le channel darkchat !`)





        douanec.send(douaneopen);

    }
}

module.exports = DouaneON;