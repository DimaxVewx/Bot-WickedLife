const Discord = require("discord.js")
const { promisify } = require('util');
const wait = promisify(setTimeout);
module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run(member) {
            const embed = new Discord.RichEmbed()
            .setColor("#ff9d2c")
                .setTitle(`Hey ! bienvenue à toi dans notre ville ${member.user.username}.`)
                .setDescription(`Ce serveur est en free-access de **9:00 à 20:00** pour jouer sur le free-access cliquez juste sur l'émoji dans #accueil.`)
                .addField(`📖 Le règlement.`, `Lire le règlement est obligatoire avant de jouer sur notre serveur rendez-vous dans le channel 📜・règlement pour le lire.`)
                .addField(`📁N2PA.`, `N2PA est notre partenaire officiel pour rejoindre leur hebergeur ça sera ici: https://www.host.n2pa.fr/`)
                .setImage("https://cdn.discordapp.com/attachments/768087190420455435/822825640797143080/bienvenue.png")

                member.guild.channels.get('792503009086406697').send(embed)
        




    }
};