const Command = require("../../modules/Command.js");

class Reload extends Command {
    constructor(client) {
        super(client, {
            name: "reload",
            description: "Reload un fichier .js",
            usage: "reload",
            guildOnly: true,
            category: "Catégorie | Admin",
            permLevel: "Admin"
        });
    }

    async run(message, args) {
        if (!args[0]) return message.channel.send(" Précise !")

        let commandName = args[0].toLowerCase()

        try {
            delete require.cache[require.resolve(`./${commandName}.js`)]
            this.client.commands.delete(commandName)
            const pull = require(`./${commandName}.js`)
            this.client.commands.set(commandName, pull)
        } catch (e) {
            return message.channel.send(`Impossible de recharger: \`${args[0].toUpperCase()}\``)
        }

        message.channel.send(`La Commande \`${args[0].toUpperCase()}\` Reload !`)
    }
}

module.exports = Reload;