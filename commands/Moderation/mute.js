const Command = require("../../modules/Command.js");
const Discord = require("discord.js");
const date = new Date();

class Mute extends Command {
    constructor(client) {
        super(client, {
            name: "mute",
            description: "Mute (permanent) le Joueur mentionné",
            usage: "mute",
            guildOnly: true,
            category: "Catégorie | Assistant",
            permLevel: "Assistant"
        });
    }

    async run(message, args) {

        let member = message.mentions.members.first()
        if (!member) return message.author.send("Membre introuvable")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + ' mute :white_check_mark:')
            let sondagelog = new Discord.RichEmbed()
                .setTitle("**UTULISATEUR MUTE PERMS**")
                .setColor("#ffa300")
                .setDescription("dans ce message vous trouverez les informations du mute perms!")
                .setTimestamp()
                .addField("Pseudo de l'utulisateur kick: ", `${member}`)
                .addField("Son ID Discord: ", `${member.id}`)
                .addField("Mute par: ", `${message.author}`)
                .addField("Mute le: ", `${date}`)


            let tempmute = message.guild.channels.find(c => c.name === "post-discord");
            tempmute.send(sondagelog)
        } else {
            message.guild.createRole({ name: 'Mute-global', permissions: 0 }).then((role) => {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(channel => {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })

            })
        }


    }
}

module.exports = Mute;