const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class Permission extends Command {
    constructor(client) {
        super(client, {
            name: "permission",
            description: "Regardez votre permission",
            usage: "permission",
            category: "Catégorie | Joueur",
            guildOnly: true,
            permLevel: "Joueur"
        });
    }

    run(message, args, level) {
        const perm = this.client.config.permLevels.find(l => l.level === level)
            .name;

        let permission = new Discord.RichEmbed()
            .setColor("#ffa300")
            .setAuthor(this.client.user.username, this.client.user.displayAvatarURL)
            .addField('Level [P] Max', "10", true)
            .addField('Grade Max', "Admin", true)
            .addField('Level [P] Min', "0", true)
            .addField('Grade Min', "Joueur", true)
            .addField('ton Level [P]', `${level}`, true)
            .addField('ton Grade', `${perm}`, true)

        message.channel.send({ embed: permission });
    }
}

module.exports = Permission;