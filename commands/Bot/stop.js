const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class Restart extends Command {
    constructor(client) {
        super(client, {
            name: "restartbot",
            description: "Redémarrer le bot discord",
            usage: "restartbot",
            guildOnly: true,
            category: "Catégorie | Admin",
            permLevel: "Admin"
        });
    }

    async run(message) {

        let embedrestart = new Discord.RichEmbed()
        .addField(`Redémarrage du bot par l'utilisateur`, message.author, true)
        .setColor("#ffa300")

        try {
            await message.channel.send(embedrestart);
            this.client.commands.forEach(async cmd => {
                await this.client.unloadCommand(cmd);
            });
            process.exit(1);
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = Restart;