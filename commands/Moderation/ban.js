const Command = require("../../modules/Command.js");
const date = new Date();
const Discord = require("discord.js")

class Ban extends Command {
    constructor(client) {
        super(client, {
            name: "ban",
            description: "Banni l'utilisateur mentionné du discord",
            usage: "ban",
            category: "Catégorie | Admin",
            permLevel: "Administrateur"
        });
    }

    run(message, args) {
        let kickedMember = message.mentions.members.first();
        if (!kickedMember) return message.author.send("Tu n'as mentionné personne !")
        let laraison = args.slice(1).join(" ");
        if (!laraison) return message.channel.send("Veuillez entrer un pseudo pour que je puisse le ban")


        let kickEmbed = new Discord.RichEmbed()
            .setTitle('**Log Modération (Ban)**')
            .setColor("#ffa300")
            .addField(`Modo: `, `${message.author.username}`)
            .addField(`Modo (ID): `, `${message.author.id}`)
            .addField(`Joueur:`, `${kickedMember}`)
            .addField(`Joueur (ID):`, `${kickedMember.id}`)
            .addField(`Raison:`, `${laraison}`)

        .setTimestamp()

        message.guild.member(kickedMember).ban(laraison);
        let kickChannel = message.guild.channels.find(c => c.name === "post-discord");
        kickChannel.send(kickEmbed)

    }
}

module.exports = Ban;