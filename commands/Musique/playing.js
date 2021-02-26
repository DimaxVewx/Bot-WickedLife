const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class PlayingMusic extends Command {
    constructor(client) {
        super(client, {
            name: "playing",
            description: "Afiche la musique qui est jouées.",
            usage: "playing",
            category: "Catégorie | Joueur",
            permLevel: "Joueur"
        });
    }

 run(message) {


    const serverQueue = message.client.queue.get(message.guild.id);
    let pausenomusic = new Discord.RichEmbed()
    .setTitle(`🎵 wickedlife`)
    .setColor("#ffa300")
    .setDescription(`Il n'y a aucune musique en cours.`)
    if (!serverQueue)
    return message.channel.send(pausenomusic)
    let musicactual = new Discord.RichEmbed()
    .setTitle(`🎵 wickedlife`)
    .setColor("#ffa300")
    .setDescription(`En ce moment: **${serverQueue.songs[0].title}**`)
    return message.channel.send(musicactual);
 }
}

module.exports = PlayingMusic;