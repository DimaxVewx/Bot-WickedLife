const Command = require("../../modules/Command.js");

class Off extends Command {
    constructor(client) {
        super(client, {
            name: "off",
            description: "dire que le serveur est fermé!",
            usage: "off",
            guildOnly: true,
            category: "Catégorie | Admin",
            permLevel: "Admin"
        });
    }

    async run(message) {
        message.delete();
        message.channel.send('le serveur est fermé pour une petite maintenance merci à vous');
    }
}

module.exports = Off;