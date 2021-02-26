const Command = require("../../modules/Command.js");
const discord = require("discord.js");

class Ticket extends Command {
    constructor(client) {
        super(client, {
            name: "createticket",
            description: "contact le staff avec cet commande",
            usage: "createticket",
            guildOnly: true,
            category: "Catégorie | Joueur",
            permLevel: "Joueur"
        });
    }

    async run(message, args) {
        const categoryId = "792500484971692082";

        var userName = message.author.username;
        var userDiscriminator = message.author.discriminator;
        let categorieticket = args.join(" ");
        if (!categorieticket) return message.channel.send(`Veuillez entrer une catégorie ex: !createticket remboursement.`)
        var bool = false;

        message.guild.channels.forEach((channel) => {

            if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {

                message.channel.send("Vous avez déjà créé un ticket");

                bool = true;

            }

        });

        if (bool == true) return;

        var embedCreateTicket = new discord.RichEmbed()
            .setTitle("Le Joueur, " + message.author.username)
            .setColor("#ffa300")
            .setFooter("utilise la commande : !createticket");

        message.channel.send(embedCreateTicket);

        message.guild.createChannel(userName + "-" + categorieticket, "text").then((createdChan) => {

            createdChan.setParent(categoryId).then((settedParent) => { //
                settedParent.overwritePermissions(message.guild.roles.find(role => role.name === "@everyone"), { "READ_MESSAGES": false });
                settedParent.overwritePermissions(message.guild.roles.find(role => role.name === "Admin"), { "READ_MESSAGES": true });
                settedParent.overwritePermissions(message.guild.roles.find(role => role.name === "Responsable"), { "READ_MESSAGES": true });
                settedParent.overwritePermissions(message.guild.roles.find(role => role.name === "Modo"), { "READ_MESSAGES": true });
                settedParent.overwritePermissions(message.guild.roles.find(role => role.name === "Assistant"), { "READ_MESSAGES": true });
                settedParent.overwritePermissions(message.guild.roles.find(role => role.name === "Développeur"), { "READ_MESSAGES": true });
                settedParent.overwritePermissions(message.author, {

                    "READ_MESSAGES": true,
                    "SEND_MESSAGES": true,
                    "ATTACH_FILES": true,
                    "CONNECT": true,
                    "CREATE_INSTANT_INVITE": false,
                    "ADD_REACTIONS": true

                });

                var embedParent = new discord.RichEmbed()
                    .setTitle("Création du **ticket**: " + message.author.username.toString())
                    .setColor("#ffa300")
                    .setDescription("Posez votre question mentionner le staff.");

                settedParent.send(embedParent);
            }).catch(err => {
                message.channel.send("Quelque chose s'est mal passé.");
            });

        }).catch(err => {
            message.channel.send("Quelque chose s'est mal passé.");
        });
    }
}

module.exports = Ticket;