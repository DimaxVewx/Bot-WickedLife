const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class ToucheIG extends Command {
    constructor(client) {
        super(client, {
            name: "toucheig",
            description: "Envoyez un message en passant par le bot discord",
            usage: "toucheig",
            guildOnly: true,
            category: "Catégorie | Responsable",
            permLevel: "Responsable"
        });
    }

    async run(message) {
        message.delete()

        
        const toucheig = new Discord.RichEmbed()
        .setTitle(`Touche | IG`, true)
        .setColor("#ffa300")
        .setDescription(`

       **👮‍ Métier - Org**

       F5  ➡ Menu interaction.
       F6  ➡ Menu métier.
       F3  ➡ Menu org.
       
       ** 📝 Personnage ** 

        G  ➡ Mode cinématique.
       F2  ➡ Téléphone.
       F9  ➡ Gestion animal.
      F10  ➡ Masque HUD & Carte.
       W   ➡ S'accroupir.
       K   ➡ Modifier l'intensite de votre voix.
       B   ➡ Pointer du doigt. 
 Page UP   ➡ S'allonger.
 Page Down ➡ S'évanouir ( rester appuyer pour maintenir l'animation)
       
       **🚗 Véhicule ** 

       U  ➡ Eteindre/Allumé le moteur.
       Y  ➡ Fermer ouvrir le véhicule personnel.
       H  ➡ Acceder au coffre du véhicule.      
       B  ➡ Mettre sa ceinture.
        `);

        message.channel.send(toucheig)
        


    }
}

module.exports = ToucheIG;