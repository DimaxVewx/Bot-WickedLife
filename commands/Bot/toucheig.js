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

        ² = Lever les mains
        F1 = Menu animations
        F2 = Ouvrir son téléphone
        F3 = Roulettes des vêtements
        F5 = Menu personnel
        F6 = Menu de fonction/job
        F7 = Menu de fonction/org
        F9 = Lancer l'enregistrement d'une séquence Rockstar Editor
        F10 = Activer/désactiver le mode cinématique
        
        E = Rentrer dans le coffre visé
        T = Ouvrir le chat
        Y = Fermer/ouvrir le véhicule (seulement si vous avez les clés)
        U = Démarrer/Eteindre le moteur du véhicule
        Maj + G = Ouvrir la radio
        H = Interaction véhicule / coffre
        K = Changer l'intensité de la voix
        CTRL = Marcher en mode furtif/Coup fatal mêlée
        W = S'accroupir/marcher en sneaky
        V = Changer de personne de vue/3e/1e personne
        B = Pointer du doigt
        X = Menu intéraction voiture
        
        PAGEUP = Ramper
        4-9 PAVNUM = Touches configurables via la commande /emotebind *4-9* *nom de l'emote*
        CAPSLOCK = Parler dans la radio


        /report = Envoyer un message à la modération en jeu
        /conduire = Permet de changer de place dans le véhicule
        /porter = Permet de porter quelqu'un sur son épaule (attention, pas de /porter en véhicule)
        /e = Permet d'exécuter une animation de la liste
        /frequence = Permet de changer de fréquence radio rapidement
        `);

        message.channel.send(toucheig)
        


    }
}

module.exports = ToucheIG;