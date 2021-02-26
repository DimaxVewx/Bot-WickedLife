const Command = require("../../modules/Command.js");

class Help extends Command {
    constructor(client) {
        super(client, {
            name: "aide",
            description: "Afficher toutes les commandes disponibles.",
            usage: "help [commande]",
            aliases: ["h"],
            category: "Catégorie | Joueur",
            permLevel: "Joueur"
        });
    }

    async run(message, args, level) {
        try {
            if (!args[0]) {
                const settings = message.settings;

                const myCommands = message.guild ?
                    this.client.commands.filter(
                        cmd => this.client.levelCache[cmd.conf.permLevel] <= level
                    ) :
                    this.client.commands.filter(
                        cmd =>
                        this.client.levelCache[cmd.conf.permLevel] <= level &&
                        cmd.conf.guildOnly !== true
                    );

                const commandNames = myCommands.keyArray();
                const longest = commandNames.reduce(
                    (long, str) => Math.max(long, str.length),
                    0
                );
                let currentCat = "";
                let output = `Commandes sur le bot\n\nle prefix c'est ${
          this.client.config.defaultSettings.prefix
        } utiliser le pour les commandes\n`;
                const sorted = myCommands
                    .array()
                    .sort((p, c) =>
                        p.help.category > c.help.category ?
                        1 :
                        p.help.name > c.help.name && p.help.category === c.help.category ?
                        1 :
                        -1
                    );
                sorted.forEach(c => {
                    const cat = c.help.category;
                    if (currentCat !== cat) {
                        output += `\u200b\n ${cat} \n`;
                        currentCat = cat;
                    }
                    output += `${settings.prefix}${c.help.name}${" ".repeat(
            longest - c.help.name.length
          )} : ${c.help.description}\n`;
                });
                message.channel.send(output, {
                    code: "asciidoc",
                    split: { char: "\u200b" }
                });
            } else {
                let command = args[0];
                if (this.client.commands.has(command)) {
                    command = this.client.commands.get(command);
                    if (level < this.client.levelCache[command.conf.permLevel]) return;
                    message.channel.send(
                        ` ${command.help.name}  \ndescription: ${
              command.help.description
            }\nutilisation: ${
              command.help.usage
            }\nalias: ${command.conf.aliases.join(", ")}`, { code: "asciidoc" }
                    );
                }
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = Help;