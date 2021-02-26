const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class Ndeuxpa extends Command {
    constructor(client) {
        super(client, {
            name: "n2pa",
            description: "Envoyez un message en passant par le bot discord pour le partenaire n2pa",
            usage: "n2pa",
            guildOnly: true,
            category: "Catégorie | Admin",
            permLevel: "Admin"
        });
    }

    async run(message) {
        message.delete(50)
        let n2pa = message.guild.channels.find(c => c.name === "📁n2pa");

        
        const partenariat = new Discord.RichEmbed()
        .setTitle(`N2PA | NOTRE HEBERGEUR`, true)
        .setColor("#ffa300")
        .addField("🌐 Site internet:", "https://host.n2pa.fr/")
        .addField("💬 Discord:", "https://discord.com/invite/TjbBNZA")
        .addField("💙 Twitter", "https://twitter.com/N2PA_Officiel")
        .addField("👉 linkedin:", "https://www.linkedin.com/company/n2pa")
        .setImage("http://image.noelshack.com/fichiers/2020/24/5/1591956501-190102012957437504.png")
        .setDescription(`
        À l'origine N2PA a été lancé dans le but de faciliter la création et la mise en place de projet sur internet.
        Nous sommes fiers de vous dire que nos valeurs n'ont pas changé tandis que nos méthodes et notre expertise ont fortement évolué.
        N2PA possède les capacités pour monter un projet de toutes pièces, bien sûr nos services sont accessibles individuellement.
        Nous proposons actuellement un service d'hébergement de haute qualité, un service de développement web haut de gamme, un service de graphisme, de designer, monteur ect... Ceci est évidemment une liste non exhaustive de nos capacités.
        Contactez-nous et nous réaliserons votre demande. "N2PA, au service de l'excellence".
        
        `);
        
        
        

        n2pa.send(partenariat)
        


    }
}

module.exports = Ndeuxpa;