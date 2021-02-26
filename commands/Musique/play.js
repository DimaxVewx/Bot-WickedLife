const Command = require("../../modules/Command.js");
const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const ytdlDiscord = require("ytdl-core-discord");
const { Util } = require("discord.js");
const m3u8stream = require('m3u8stream');
const parseTime   = require('m3u8stream/dist/parse-time');

class PlayMusic extends Command {
    constructor(client) {
        super(client, {
            name: "play",
            description: "Jouer et ajouter de la musique.",
            usage: "play",
            category: "Catégorie | Joueur",
            permLevel: "Joueur"
        });
    }

   async run(message, args) {

    let etresalon = new Discord.RichEmbed()
    .setTitle(`🎵 wickedlife`)
    .setColor("#ffa300")
    .setDescription('Vous devez être dans un salon vocal pour utiliser cette commande.')

    const { voiceChannel } = message.member;
    if (!voiceChannel) return message.channel.send(etresalon)

    const serverQueue = message.client.queue.get(message.guild.id);
    const songInfo = await ytdl.getInfo(args[0]);
    const song = {
        id: songInfo.video_id,
        title: Util.escapeMarkdown(songInfo.title),
        url: songInfo.video_url
    };

    if (serverQueue) {
        serverQueue.songs.push(song);
        let musicadd = new Discord.RichEmbed()
        .setTitle(`🎵 wickedlife`)
        .setColor("#ffa300")
        .setDescription(`La musique ${song.title} vient d'être ajoutée.`)

        return message.channel.send(musicadd)
    }

    const queueConstruct = {
        textChannel: message.channel,
        voiceChannel,
        connection: null,
        songs: [],
        volume: 1,
        playing: true
    }

    message.client.queue.set(message.guild.id, queueConstruct);
    queueConstruct.songs.push(song);

    const play = async song => {
        const queue = message.client.queue.get(message.guild.id);
        if (!song) {
            queue.voiceChannel.leave();
            message.client.queue.delete(message.guild.id);
            return;
        }
        const dispatcher = queue.connection
        .playOpusStream(await ytdlDiscord(song.url), { passes:3 })
        .on("end", reason => {
            if (reason === "Récupération trop lente !")
            console.log("La musique s'est arrêtées !");
            else console.log(reason);
            queue.songs.shift();
            play(queue.songs[0])
        })
        .on("error", error => console.error(error));
        dispatcher.setVolumeLogarithmic(queue.volume / 5);
        let musicadddeux = new Discord.RichEmbed()
        .setTitle(`🎵 wickedlife`)
        .setColor("#ffa300")
        .setDescription(`Je commence à jouer: ${song.title}`);

        queue.textChannel.send(musicadddeux)
    };

    try {
        const connection = await voiceChannel.join();
        queueConstruct.connection = connection;
        play(queueConstruct.songs[0]);
    } catch (error) {
        console.error(`Je n'ai pas pu rejoindre le salon: ${error}`);
        message.client.queue.delete(message.guild.id);
        await voiceChannel.leave();
    }
        
}
}

module.exports = PlayMusic;