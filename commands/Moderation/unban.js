const Command = require("../../modules/Command.js");
const date = new Date();
const Discord = require("discord.js");
const { relativeTimeRounding } = require("moment");

class Unban extends Command {
    constructor(client) {
        super(client, {
            name: "unban",
            description: "Débannir l'utilisateur avec l'id du discord",
            usage: "unban",
            category: "Catégorie | Responsable",
            permLevel: "Responsable"
        });
    }

   async run(message, args) {
    let banoupas = new Discord.RichEmbed()
    .setTitle(`📛 wickedlife | Modération`)
    .setColor("#ffa300")
    .setDescription(`Cette personne n'est pas banni.`)

    let unbansucess = new Discord.RichEmbed()
    .setTitle(`📛 wickedlife | Modération`)
    .setColor("#ffa300")
    .setDescription(`Débanni par le Modo ${message.author}.`)

    let unbanoupasdeux = new Discord.RichEmbed()
    .setTitle(`📛 wickedlife | Modération`)
    .setColor("#ffa300")
    .setDescription(`Tu es sûr que l'utilisateur est bien banni de ce discord ?`)



    let User = args[0];
    let Reason = args.slice(1).join(` `);
    if (!User) return message.channel.send(unbanoupasdeux)
    if (!Reason) return message.channel.send(unbansucess)
    
    message.guild.fetchBans()
    .then(bans => {
    if (bans.some(u => User.includes(u.username))) {
    let user = bans.find(user => user.username === User);
    
    message.guild.unban(user.id, Reason);
    }
    else if (bans.some(u => User.includes(u.id))) {
    
    message.guild.unban(User, Reason);
    }
    else {
    return message.channel.send(banoupas);
    }
    });
    
       



    }
}

module.exports = Unban;