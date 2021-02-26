const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class ResumeMusic extends Command {
    constructor(client) {
        super(client, {
            name: "resume",
            description: "Remettre la musique (en pause).",
            usage: "resume",
            category: "Catégorie | Joueur",
            permLevel: "Joueur"
        });
    }

 run(message) {


    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        let pausemusic = new Discord.RichEmbed()
        .setTitle(`🎵 wickedlife`)
        .setColor("#ffa300")
        .setDescription(`Je remets la musique en marche.`)
        serverQueue.connection.dispatcher.resume();
        return message.channel.send(pausemusic)
    }
    let nomusic = new Discord.RichEmbed()
    .setTitle(`🎵 wickedlife`)
    .setColor("#ffa300")
    .setDescription(`Il n'y a aucune musique qui est entrain de jouer.`)
    return message.channel.send(nomusic)       
}
}

module.exports = ResumeMusic;