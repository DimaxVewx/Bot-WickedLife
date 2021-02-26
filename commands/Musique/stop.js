const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class StopMusic extends Command {
    constructor(client) {
        super(client, {
            name: "stop",
            description: "Mettre en stop de la musique.",
            usage: "stop",
            category: "Catégorie | Joueur",
            permLevel: "Joueur"
        });
    }

 run(message) {

    let etresalon = new Discord.RichEmbed()
    .setTitle(`🎵 wickedlife`)
    .setColor("#ffa300")
    .setDescription('Vous devez être dans un salon vocal pour utiliser cette commande.')

    const { voiceChannel } = message.member;
    if (!voiceChannel) return message.channel.send(etresalon)

    let pausenomusic = new Discord.RichEmbed()
    .setTitle(`🎵 wickedlife`)
    .setColor("#ffa300")
    .setDescription(`Il n'y a aucune musique, pour l'instant.`)
    const serverQueue = message.client.queue.get(message.guild.id);
    if(!serverQueue) return message.channel.send(pausenomusic)
serverQueue.songs = [];
let jestop = new Discord.RichEmbed()
.setTitle(`🎵 wickedlife`)
.setColor("#ffa300")
.setDescription('La commande stop a été utilisé.')
serverQueue.connection.dispatcher.end(jestop)
        
}
}

module.exports = StopMusic;