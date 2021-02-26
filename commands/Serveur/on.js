const Command = require("../../modules/Command.js");

class On extends Command {
    constructor(client) {
        super(client, {
            name: "on",
            description: "dire que le serveur est ouvert !",
            usage: "on",
            guildOnly: true,
            category: "Catégorie | Admin",
            permLevel: "Admin"
        });
    }

    async run(message) {
        message.delete();
        message.channel.send('le serveur est démarré connectez vous maintenant merci à vous');
    }
}

module.exports = On;