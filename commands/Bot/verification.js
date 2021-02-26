const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class VerifC extends Command {
    constructor(client) {
        super(client, {
            name: "verifc",
            description: "Message du discord vérification.",
            usage: "verifc",
            guildOnly: true,
            category: "Catégorie | Responsable",
            permLevel: "Responsable"
        });
    }

    async run(message) {


        const joueurrole = message.guild.roles.get("767750311892222032");
        const joueuremoji = message.guild.emojis.get("✅");

        message.delete()

        const verification = new Discord.RichEmbed()
        .setTitle(`VERIFICATION | wickedlifeRP`, true)
        .setColor("#ffa300")
        .addField("🌐 Top Vote:", "https://top-serveurs.net/gta/wickedliferp")
        .addField("💙 Twitter", "https://twitter.com/wickedlife")
        .addField("👉 Boutique:", "https://wickedliferp.tebex.io/")
        .setDescription(`
        ** Bienvenue sur notre serveur**
                                                     Hey bienvenue sur notre serveur wickedlifeRP 
         
         
         ** Pour avoir le rôle ${joueurrole.toString()} cliquez sur le ✅ en bas.** 
         
         N'hésiter pas à nous suivre sur nos réseaux sociaux :     
         Twitter: ** https://twitter.com/wickedlife** être au courant des événements à suivre.

         Voici notre partenaire officiel.
         N2PA: **https://www.host.n2pa.fr/**
         ** Discord métier organisation ** : https://discord.gg/ZKtbgA9     

                                            Merci à vous et bon jeu à vous, Cordialement l'équipe du serveur
        
        `);

        message.channel.send(verification).then(async msg => {
            await msg.react("✅")
        })


        
        


    }
}

module.exports = VerifC;