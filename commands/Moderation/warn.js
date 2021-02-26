const Command = require("../../modules/Command.js");
const date = new Date();
const Discord = require("discord.js")

class Warn extends Command {
    constructor(client) {
        super(client, {
            name: "warn",
            description: "Averti le membre mentionné",
            usage: "warn",
            category: "Catégorie | Modo",
            permLevel: "Modo"
        });
    }

    async run(message, args) {
        try {
            const warnedUser = message.guild.member(
                message.mentions.users.first() || message.guild.members.get(args[0])
            );
            if (!warnedUser)
                return message.channel.send("L'utilisateur n'existe pas");
            const warnToAdd = 1;
            const reason = args.join(" ").slice(22);
            this.client.warns.ensure(`${warnedUser.id}`, {
                warnings: 0
            });
            let userWarnings = this.client.warns.get(`${warnedUser.id}`, "warnings");
            userWarnings += warnToAdd;

            this.client.warns.set(`${warnedUser.id}`, userWarnings, "warnings");

            message.delete();

            if (this.client.warns.get(`${warnedUser.id}`, "warnings") == 1) {
                message.channel.send(
                    `${warnedUser}, vient d'avoir un avertissement (Raison: **${reason}**). (Total: 1)`

                );
            } else if (this.client.warns.get(`${warnedUser.id}`, "warnings") == 2) {
                const muteRole = message.guild.roles.find(x => x.name === "muted");
                message.channel.send(
                    `${warnedUser}, vient d'avoir un avertissement (Raison: **${reason}**). (Total: 2)`
                );
                const muteTime = "1h";
                let laraison = "Avertissement 3 kick du discord.";
                await message.guild.member(warnedUser).kick(laraison);
                message.channel.send(
                    `${warnedUser}, vient d'avoir un avertissement (Raison: **${reason}**). (Total: 3) (Sanction: kick du discord)`
                );



                setTimeout(function() {
                    warnedUser.removeRole(muteRole.id);
                    message.channel.send(`L'utilisateur ${warnedUser} n'est plus muté !`);
                }, ms(muteTime));
            }
        } catch (e) {
            console.log(e);

        }
    }
}

module.exports = Warn;