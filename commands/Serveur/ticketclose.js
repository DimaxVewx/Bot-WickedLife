const Command = require("../../modules/Command.js");
const discord = require("discord.js");

class Ticketclose extends Command {
    constructor(client) {
        super(client, {
            name: "ticketclose",
            description: "Ferme le ticket que le Joueur crée",
            usage: "ticketclose",
            guildOnly: true,
            category: "Catégorie | Assistant",
            permLevel: "Assistant"
        });
    }

    async run(message) {
        const categoryId = "792500484971692082";

        if (message.channel.parentID == categoryId) {

            message.channel.delete();

        } else {

            message.channel.send("Veuillez placer cette commande dans un canal de ticket.");

        }

        var embedCloseTicket = new discord.RichEmbed()
            .setTitle("le ticket de, " + message.channel.name)
            .setColor("#ffa300")
            .setDescription("son billet a été **supprimé**, son problème a été régler ")
            .setFooter("ticket fermé");

        var logChannel = message.guild.channels.find(role => role.name === "Assistant");
        if (!logChannel) return message.channel.send("La chaîne n'existe pas");

        logChannel.send(embedCloseTicket);
    }
}

module.exports = Ticketclose;