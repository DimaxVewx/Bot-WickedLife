const Command = require("../../modules/Command.js");
const Discord = require("discord.js");
const { relativeTimeRounding } = require("moment");

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

        const messageArray = message.content.split(' ');
        
        let deleteAmount;
    
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('⚠️ Entrer un nombre réel....') }
    
        if (parseInt(args[0]) > 99) {
            return message.reply('⚠️ Tu peux pas dépasser plus de 99 lignes...')
        } else {
            deleteAmount = parseInt(args[0]);
        }
    
        message.channel.bulkDelete(deleteAmount + 1, true);
        message.reply(`⚠️ ${deleteAmount} en moins.`)


    }
}

module.exports = Clear;