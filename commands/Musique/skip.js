const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class SkipMusic extends Command {
    constructor(client) {
        super(client, {
            name: "skip",
            description: "Passer la musique.",
            usage: "skip",
            category: "Catégorie | Joueur",
            permLevel: "Joueur"
        });
    }

 run(message) {

    let skipcmd = new Discord.RichEmbed()
    .setTitle(`🎵 wickedlife`)
    .setColor("#ffa300")
    .setDescription(`La commande skip vient d'être utilisées.`)

    let etresalon = new Discord.RichEmbed()
    .setTitle(`🎵 wickedlife`)
    .setColor("#ffa300")
    .setDescription('Vous devez être dans un salon vocal pour utiliser cette commande.')

    const { voiceChannel } = message.member;
    if (!voiceChannel) return message.channel.send(etresalon)
    const serverQueue = message.client.queue.get(message.guild.id);
    let pausenomusic = new Discord.RichEmbed()
    .setTitle(`🎵 wickedlife`)
    .setColor("#ffa300")
    .setDescription(`Il n'y a aucune musique en cours.`)
    if (!serverQueue)
    return message.channel.send(pausenomusic)

    serverQueue.connection.dispatcher.end(skipcmd);
 }
}

module.exports = SkipMusic;