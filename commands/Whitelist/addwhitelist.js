const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class AddWL extends Command {
    constructor(client) {
        super(client, {
            name: "addwhitelist",
            description: "Ajoute un membre dans le grade whitelist.",
            usage: "addwhitelist",
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
        var whitelistmsg = `${membre} vient d'être ajouter à la: **whitelist** ✅`;

        let role = message.guild.roles.find(x => x.name === "Whitelist");
        let role5 = message.guild.roles.find(x => x.name === "Joueur");

        membre.removeRole(role5).catch(console.error);

        membre.addRole(role).catch(console.error);
        whitelist.send(whitelistmsg)

    
    }


    
}


module.exports = AddWL;