const Command = require("../../modules/Command.js");

class DarkChat extends Command {
    constructor(client) {
        super(client, {
            name: "darkchat",
            description: "Envoyez un message dans le chat darknet.",
            usage: "darkchat",
            guildOnly: true,
            category: "Catégorie | Joueur",
            permLevel: "Joueur"
        });
    }

    async run(message, args) {
        var darkchatc = this.client.channels.get("796775606712270858");

        message.delete();

        let botmessage = args.join(" ");
        if (!botmessage) return message.channel.send(`Veuillez entrer un message pour l'envoyer dans le channel darkchat !`)



        darkchatc.send(botmessage);

    }
}

module.exports = DarkChat;