const Command = require("../../modules/Command.js");
const date = new Date();
const Discord = require("discord.js")

class Kick extends Command {
    constructor(client) {
        super(client, {
            name: "kick",
            description: "Kick l'utilisateur mentionné du discord",
            usage: "kick",
            category: "Catégorie | Modo",
            permLevel: "Modo"
        });
    }

    run(message, args) {
        let kickedMember = message.mentions.members.first();
        if (!kickedMember) return message.author.send("Tu n'as mentionné personne !")
        let laraison = args.slice(1).join(" ");
        if (!laraison) return message.channel.send("Veuillez entrer un pseudo pour que je puisse le kick")


        let kickEmbed = new Discord.RichEmbed()
            .setAuthor(`Utulisateur Kick`, this.client.user.displayAvatarURL)
            .setColor("#ffa300")
            .addField("Pseudo Joueur", `${kickedMember}`, true)
            .addField("Id Joueur", `${kickedMember.id}`, true)
            .addField("Modo", `${message.author}`, true)
            .addField("Pour", `${laraison}`, true)
            .addField("Kick le ", `${date}`, true)
            .setFooter("Logs | Modération")

        message.guild.member(kickedMember).kick(laraison);
        let kickChannel = message.guild.channels.find(c => c.name === "post-discord");
        kickChannel.send(kickEmbed)

    }
}

module.exports = Kick;