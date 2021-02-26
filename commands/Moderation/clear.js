const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class Clear extends Command {
    constructor(client) {
        super(client, {
            name: "clear",
            description: "Nettoyez le chat discord",
            usage: "clear",
            category: "Catégorie | Modo",
            permLevel: "Modo"
        });
    }

    async run(message, args) {
        try {
            message.channel.bulkDelete(args[0]).then(() => {
                message.channel
                    .send(`Je supprime ***${args[0]} messages*** pour vos ordres.`)
                    .then(message => message.delete(5000));
            })

            let ClearLogs = new Discord.RichEmbed()
                .setTitle('**Logs Modération (Clear)**')
                .setColor("#ffa300")
                .addField(`Modo: `, `${message.author.username}`)
                .addField(`Modo (ID): `, `${message.author.id}`)
                .addField(`Clear Channel: `, message.channel)
                .addField(`Lignes Supprimées: `, `**${args[0]}**`)
                .setTimestamp()

            let LogsClear = message.guild.channels.find(`name`, "post-discord");
            LogsClear.send(ClearLogs);

        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = Clear;