const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class QueueMusic extends Command {
    constructor(client) {
        super(client, {
            name: "queue",
            description: "La liste des musiques.",
            usage: "queue",
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
    return message.channel.send(`
    ** Liste des musiques **
    ${serverQueue.songs.map(song => `${song.title}`).join("\n")}

    ** La musique** ${serverQueue.song[0].title}
    `);
 }
}

module.exports = QueueMusic;