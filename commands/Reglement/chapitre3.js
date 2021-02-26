const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class Chapitre1 extends Command {
    constructor(client) {
        super(client, {
            name: "chapitre1",
            description: "Envoyez un message en passant par le bot discord",
            usage: "chapitre1",
            guildOnly: true,
            category: "Catégorie | Admin",
            permLevel: "Admin"
        });
    }

    async run(message) {
        message.delete()

        
        const toucheig = new Discord.RichEmbed()
        .setTitle(`Touche | IG`, true)
        .setColor("#ffa300")
        .setDescription(`


        `);

        message.channel.send(toucheig)
        


    }
}

module.exports = Chapitre1;