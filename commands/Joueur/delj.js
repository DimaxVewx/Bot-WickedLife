const Command = require("../../modules/Command.js");

class DelJ extends Command {
    constructor(client) {
        super(client, {
            name: "delj",
            description: "Permet de supprimer votre garde Joueur.",
            usage: "delj",
            guildOnly: true,
            category: "Catégorie | Joueur",
            permLevel: "Joueur"
        });
    }

    async run(message, args) {
        message.delete();
        const Joueur = message.author;
        const gradeJoueur = message.guild.roles.find(x => x.name === "Joueur");
        message.member.removeRole(gradeJoueur);

        await message.channel.send("Ton grade ** Joueur ** vient d'être supprimer !")




    }
}

module.exports = DelJ;