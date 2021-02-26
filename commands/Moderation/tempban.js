const Command = require("../../modules/Command.js");
const date = new Date();
const Discord = require("discord.js")
const ms = require("ms");

class Tempban extends Command {
    constructor(client) {
        super(client, {
            name: "tempban",
            description: "Tempban l'utilisateur mentionné du discord",
            usage: "tempban",
            category: "Catégorie | Modo",
            permLevel: "Modo"
        });
    }

    async run(message, args) {
        var user = message.guild.member(message.mentions.users.first());

        if (!user) return message.author.send("Veuillez mentionner un utilisateur");




        var reason = args.join(" ").slice(22);

        if (!reason) return message.author.send("Fournissez une raison");

        var tempBanTime = args[1];

        if (ms(tempBanTime)) {

            await message.guild.member(user).ban(reason);
            let tempbanembed = new Discord.RichEmbed()
                .setAuthor(`Utilisateur Temp Ban`, this.client.user.displayAvatarURL)
                .setColor("#ffa300")
                .addField("Pseudo Joueur", `${user}`, true)
                .addField("Id Joueur", `${user.id}`, true)
                .addField("Modo", `${message.author}`, true)
                .addField("Pour", `${reason}`, true)
                .addField("Pendant", `${tempBanTime}`, true)
                .addField("Ban le ", `${date}`, true)
                .setFooter("Logs | Modération")

            let kickChannel = message.guild.channels.find(c => c.name === "post-discord");
            kickChannel.send(tempbanembed)

            message.channel.send(`${user} a été banni pendant ${tempBanTime}`);
            setTimeout(function() {

                message.guild.unban(user.id);

                message.author.send(`${user}  n'est plus banni.`);

            }, ms(tempBanTime));

        } else {
            return message.channel.send("Spécifiez une heure valide");
        }

    }
}

module.exports = Tempban;