const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class PauseMusic extends Command {
    constructor(client) {
        super(client, {
            name: "pause",
            description: "Mettre en pause de la musique.",
            usage: "pause",
            category: "Catégorie | Joueur",
            permLevel: "Joueur"
        });
    }

 run(message) {


    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        let pausemusic = new Discord.RichEmbed()
        .setTitle(`🎵 wickedlife`)
        .setColor("#ffa300")
        .setDescription(`La musique est en pause.`)
        serverQueue.connection.dispatcher.pause();
        return message.channel.send(pausemusic)
    }
    let nomusic = new Discord.RichEmbed()
    .setTitle(`🎵 wickedlife`)
    .setColor("#ffa300")
    .setDescription(`Il n'y a aucune musique qui est entrain de jouer.`)
    return message.channel.send(nomusic)       
}
}

module.exports = PauseMusic;