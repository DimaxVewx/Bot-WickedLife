const Command = require("../../modules/Command.js");
const Discord = require("discord.js");

class Profil extends Command {
    constructor(client) {
        super(client, {
            name: "profil",
            description: "Regardez votre profil",
            usage: "profil",
            category: "Catégorie | Joueur",
            guildOnly: true,
            permLevel: "Joueur"
        });
    }

    run(message, args, level) {

 



        const { guild } = message

        guild.fetchInvites().then((invites) => {
          const inviteCounter = {

          }
    
          invites.forEach((invite) => {
            const { uses, inviter } = invite
            const { username, discriminator } = inviter
    
            const name = `${username}#${discriminator}`
    
            inviteCounter[name] = (inviteCounter[name] || 0) + uses
          })
    


    
          const sortedInvites = Object.keys(inviteCounter).sort(
            (a, b) => inviteCounter[b] - inviteCounter[a]
          )
    
          console.log(sortedInvites)
    
          sortedInvites.length = 1
    
          for (const invite of sortedInvites) {
            const count = inviteCounter[invite]


            const perm = this.client.config.permLevels.find(l => l.level === level)
            .name;

        let profil = new Discord.RichEmbed()
            .setColor("#ffa300")
            .setAuthor(`Voici ton profil: ${message.author.username}`, message.author.displayAvatarURL)
            .addField('ton Grade', `${perm}`, true)
            .addField('ton Level [P]', `${level}`, true)
            .addField('Joueurs invités', `${count}`, true)

        message.channel.send({ embed: profil });



        }


    
        })






    }
}

module.exports = Profil;