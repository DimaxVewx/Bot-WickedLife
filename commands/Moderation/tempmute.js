const Command = require("../../modules/Command.js");
const Discord = require("discord.js");
const ms = require("ms");
const date = new Date();

class Tempmute extends Command {
    constructor(client) {
        super(client, {
            name: "tempmute",
            description: "Tempmute (permanent) le Joueur mentionné",
            usage: "tempmute",
            guildOnly: true,
            category: "Catégorie | Assistant",
            permLevel: "Assistant"
        });
    }

    async run(message, args) {

        var mutemsg = new Discord.RichEmbed()
        .setColor("#ffa300")
            .setTitle('**tempmute**')
            .addField('Erreur ', 'Veuillez entrer un vrai pseudo')
        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!tomute) return message.reply(mutemsg)

        let muterole = message.guild.roles.find(`name`, "Mute-global");
        if (!muterole) {
            try {
                muterole = await message.guild.createRole({
                    name: "Muted",
                    color: "#FE0909",
                    permissions: []
                })
                message.guild.channels.forEach(async(channel, id) => {
                    await channel.overwritePermissions(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    });
                });
            } catch (e) {
                console.log(e.stack);
            }
        }
        let mutetime = args[1];
        var mutemsg3 = new Discord.RichEmbed()
        .setColor("#ffa300")
            .setTitle('**tempmute**')
            .addField('Entrez un vrai temps ', 'comme : !tempmute @utulisateur 3d')

        if (!mutetime) return message.reply(mutemsg3);

        await (tomute.addRole(muterole.id));

        message.reply(`<@${tomute.id}> a été mute pour ${ms(ms(mutetime))}`);

        setTimeout(function() {
            tomute.removeRole(muterole.id);
            message.channel.send(`<@${tomute.id}> est demute...`);
        }, ms(mutetime));

        let tempmuteEmbed = new Discord.RichEmbed()
            .setTitle("**UTULISATEUR TEMPMUTE**")
            .setColor("#ffa300")
            .setDescription("dans ce message vous trouverez les informations du mute!")
            .setTimestamp()
            .addField("ID de l'utulisateur mute: ", `${tomute.id}`, true)
            .addField("Modo: ", `${message.author}`, true)
            .addField("Pendant: ", `${ms(ms(mutetime))}`, true)
            .addField("Mute le: ", `${date}`, true)

        let tempmute = message.guild.channels.find(c => c.name === "post-discord");
        tempmute.send(tempmuteEmbed)


    }
}


module.exports = Tempmute;