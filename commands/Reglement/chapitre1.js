const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class Chapitreun extends Command {
    constructor(client) {
        super(client, {
            name: "chapitre1",
            description: "Envoyez un message en passant par le bot discord",
            usage: "chapitre1",
            guildOnly: true,
            category: "Catégorie | Admin",
            permLevel: "Admin"
        });
    }

    async run(message) {
        message.delete()

        
        const chapitre1 = new Discord.RichEmbed()
        .setTitle(`Chapitre 1.0`, true)
        .setColor("#ffa300")
        .setDescription(`
        1.1→ Le Rôle-Play est avant tout un style de jeu immersif dans lequel vous devrez incarner véritablement votre personnage, le faire évoluer et le vivre complètement, dans ses rapports au monde qui l’entoure et aux personnes qu’il rencontre. 
        1.2→ Le “Freekill”, “Carkill”, “Free Fight”, “Métagaming”, “Powergaming” et “No Fear Rp” sont interdit. 
        1.2.1→ FREEKILL : Le faite de tuer quelqu’un sans aucune raison. 
        1.2.2→ CARKILL : Le faite d’écraser quelqu’un avec une voiture excepté si cela est justifié par l’action de la scène. 
        1.2.3→ FREE FIGHT : Le faite de tabasser quelqu’un sans aucune raison. 
        1.2.4→ METAGAMING : Toute utilisation d’informations obtenues de façon Hors-RP (Stream, Discord, Teamspeak, etc…) est passible d’une lourde sanction. 
        1.2.5→ POWERGAMING : Les actions irréalisables dans la vraie vie sont interdites. 
        1.2.6→ NO FEAR RP : Il est impératif que vous agissiez comme vous le feriez IRL. Votre personnage a peur de la mort. Ne faites pas d’actions héroïques, sauf éventuellement si votre background vous le permet. 
        1.2.7→ RP DE MASSE : Le RP de Masse signifie que les endroits publics (comme les safes-zones, gouvernement, planque d'organisation) sont remplis de personne (RP parlant). Donc faites comme si on était plus de 1M en ville sinon vous risquez une sanction ! 
        1.2.8→ WIN RP : Le Win RP est le fait que chaque Groupe (Gang / Police) ou personne acteur veuille sortir gagnant d’une scène au détriment du règlement et de la qualité du RP. Il faut parfois accepter de perdre! 
        1.2.9→ PAIN RP : Le Pain RP consiste de faire ressentir la douleur lors de vos actions, il est obligatoire de faire comprendre au autres Joueurs votre situation 
        1.3→ STREAMSTALK : Le Streamstalk est le fait de récolter des informations sur un stream afin de forcer le RP avec le Joueur. Par exemple, remarquer que le Joueur est à un endroit X dans le jeu, alors vous allez à cet endroit afin de rencontrer le streamer.
        `);

        message.channel.send(chapitre1)
        


    }
}

module.exports = Chapitreun;