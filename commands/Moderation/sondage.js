const Command = require("../../modules/Command.js");
const date = new Date();
const Discord = require("discord.js")

class Sondage extends Command {
    constructor(client) {
        super(client, {
            name: "sondage",
            description: "Banni l'utilisateur mentionné du discord",
            usage: "sondage",
            category: "Catégorie | Aide LM",
            permLevel: "Aide LM"
        });
    }

   async run(message, args) {
       message.delete()

        let precision = new Discord.RichEmbed()
        .setTitle(`🔔 wickedlife | Divers`)
        .setColor("#ffa300")
        .setDescription(`Il faut mettre la question.`)

        if (!args[0]) return message.channel.send(precision);
        
        const embedSondage = new Discord.RichEmbed()
        
        .setTitle(`Sondage par **${message.author.username}**`)
        .setColor("#ffa300")
        .setFooter(`Appuyez sur les réactions ci-dessous, pour voter.`)
        .setDescription(args.join(' '));

        let msg = await message.channel.send(embedSondage);
        await msg.react('✅');
        await msg.react('❌');

    }
}

module.exports = Sondage;