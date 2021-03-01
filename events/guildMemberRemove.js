const Discord = require("discord.js")
module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run(member) {
        let embed = new Discord.RichEmbed()
        
            .setAuthor(`-1`, this.client.user.displayAvatarURL)
            .setColor("#ffa300")
            .setDescription('Le Joueur **' + member.user.username + '** a **quitte le discord**')

        member.guild.channels.get('792501554116427797').send(embed)
    }
};