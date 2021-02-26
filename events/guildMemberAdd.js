const Discord = require("discord.js")
module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run(member) {
        const channel = member.guild.channels.find(ch => ch.name === "💼・arrivés");
        const footer = "wickedlife";


        const embed = new Discord.RichEmbed()
            .setTitle('Bienvenue à toi !')
            .setColor("#ffa300")
            .setDescription(`Attention ${member} il est important de lire les deux règlements RP & DISCORD !`)
            .addField(`Ceci est un serveur serious RP.`, `Donc fais attention.`)
            .setThumbnail(member.user.avatarURL)
            .setFooter(footer)

        const embed2 = new Discord.RichEmbed()
        .setColor("#ffa300")
            .setTitle(`Hey ! bienvenue à toi dans notre ville ${member.user.username}.`)
            .setDescription(`Serveur sous whitelist si tu souhaites le rejoindre il faut avoir plus de 17 ans et remplir notre formulaire ici: http://wickedlife.fr/`)
            .addField(`📖 Le règlement.`, `Lire le règlement est obligatoire avant de jouer sur notre serveur rendez-vous dans le channel #📓règlement pour le lire.`)
            .addField(`🔒 La whitelist.`, `Passer une whitelist est obligatoire sur le serveur il faut avoir 17 ans minimum et avoir un bon background voici le site: http://wickedlife.fr/`)
            .addField(`📁N2PA.`, `N2PA est notre partenaire officiel pour rejoindre leur hebergeur ça sera ici: https://www.host.n2pa.fr/`)
            .setImage("https://image.noelshack.com/fichiers/2020/35/5/1598571629-bienvenue.png")



        member.guild.channels.get('769628925986471987').send(embed2)

    }
};