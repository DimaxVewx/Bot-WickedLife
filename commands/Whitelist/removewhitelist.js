const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class DelWL extends Command {
    constructor(client) {
        super(client, {
            name: "delwhitelist",
            description: "Supprime un membre dans le grade whitelist.",
            usage: "delwhitelist",
            guildOnly: true,
            category: "Catégorie | Douanier",
            permLevel: "Douanier"
        });
    }

    async run(message, args) {
        message.delete();


        let membre = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!membre) return message.author.send("Veuillez d'abord mentionner une personne.");
        var whitelist = this.client.channels.get("805497705010823189");
        var whitelistmsg = `${membre} vient d'être supprimer de la: **whitelist** 📛`;

        let role = message.guild.roles.find(x => x.name === "Whitelist");

        membre.removeRole(role).catch(console.error);
        whitelist.send(whitelistmsg)

    
    }


    
}


module.exports = DelWL;