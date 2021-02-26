const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class Dire extends Command {
    constructor(client) {
        super(client, {
            name: "dire",
            description: "Envoyez un message en passant par le bot discord",
            usage: "dire",
            guildOnly: true,
            category: "Catégorie | Modo",
            permLevel: "Modo"
        });
    }

    async run(message, args) {

        message.delete();

        let botmessage = args.join(" ");
        const staffdire = new Discord.RichEmbed()
        .setColor("#ffa300")
        .setTitle(`Staff | Message 🛡️`, true)
        .setDescription(botmessage);
        if (!botmessage) return message.channel.send('`Vous devez indiquer un message a répéter`')

        message.channel.send(staffdire);

    }
}

module.exports = Dire;