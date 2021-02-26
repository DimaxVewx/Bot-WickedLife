const Command = require("../../modules/Command.js");

class AddJ extends Command {
    constructor(client) {
        super(client, {
            name: "addj",
            description: "Permet d'ajouter votre garde Joueur.",
            usage: "addj",
            guildOnly: true,
            category: "Catégorie | Joueur",
            permLevel: "Joueur"
        });
    }

    async run(message, args) {
        message.delete();
        const Joueur = message.author;
        const gradeJoueur = message.guild.roles.find(x => x.name === "Joueur");
        message.member.addRole(gradeJoueur);

        await message.author.send("Ton grade ** Joueur ** vient d'être ajouter !")




    }
}

module.exports = AddJ;