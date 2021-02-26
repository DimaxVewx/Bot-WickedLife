const Command = require("../../modules/Command.js");
const date = new Date();
const Discord = require("discord.js")

class WarnIG extends Command {
    constructor(client) {
        super(client, {
            name: "warnig",
            description: "Averti le membre mentionné pour ces actions IG.",
            usage: "warnig",
            category: "Catégorie | Modo",
            permLevel: "Modo"
        });
    }

    async run(message, args) {
        try {
          const Joueurwarn = message.guild.member(
            message.mentions.users.first() || message.guild.members.get(args[0])
          );
          if (!Joueurwarn)
            return message.channel.send("L'utilisateur n'existe pas.");
          const warnToAdd = 1;
          const warnrl1 = message.guild.roles.find(x => x.name === "Avertissement I");
          const warnrl2 = message.guild.roles.find(x => x.name === "Avertissement II");
          const warnrl3 = message.guild.roles.find(x => x.name === "Whitelist");
          let warnc = message.guild.channels.find(c => c.name === "🔨・avertissements");
          const modo = message.author;
          const reason = args.join(" ").slice(22);
          this.client.warnsig.ensure(`${Joueurwarn.id}`, {
            warningsig: 0
          });
          let userwarningsig = this.client.warnsig.get(`${Joueurwarn.id}`, "warningsig");
          userwarningsig += warnToAdd;
    
          this.client.warnsig.set(`${Joueurwarn.id}`, userwarningsig, "warningsig");
    
          message.delete();
    
          if (this.client.warnsig.get(`${Joueurwarn.id}`, "warningsig") == 1) {
              

            let warnigch1 = new Discord.RichEmbed()
            .setTitle("⚠️ Modération ⚠️")
            .setColor("#ffa300")
            .setDescription("**Un Joueur vient de se prendre un avertissement !**")
            .setTimestamp()
            .addField("Pseudo de l'utilisateur averti: ", `${Joueurwarn}.`)
            .addField("Pour: ", `${reason}.`)
            .addField("Averti par: ", `${modo}`)
            .addField("Verdict:", `**ajout du grade avertissement 1.**`)
            warnc.send(warnigch1)

        
            Joueurwarn.addRole(warnrl1.id);



          } else if (this.client.warnsig.get(`${Joueurwarn.id}`, "warningsig") == 2) {
            let warnigch2 = new Discord.RichEmbed()
            .setTitle("⚠️ Modération ⚠️")
            .setColor("#ffa300")
            .setDescription("**Un Joueur vient de se prendre son deuxième avertissement !**")
            .setTimestamp()
            .addField("Pseudo de l'utilisateur averti: ", `${Joueurwarn}.`)
            .addField("Pour: ", `${reason}.`)
            .addField("Averti par: ", `${modo}`)
            .addField("Verdict:", `**ajout du grade avertissement 2.**`)
            warnc.send(warnigch2)

        
            Joueurwarn.addRole(warnrl2.id);




          } else if (this.client.warnsig.get(`${Joueurwarn.id}`, "warningsig") == 3) {

            let warnigch3 = new Discord.RichEmbed()
            .setTitle("⚠️ Modération ⚠️")
            .setColor("#ffa300")
            .setDescription("**Un Joueur vient de se prendre son troisième avertissement !**")
            .setTimestamp()
            .addField("Pseudo de l'utilisateur averti: ", `${Joueurwarn}.`)
            .addField("Pour: ", `${reason}.`)
            .addField("Averti par: ", `${modo}`)
            .addField("Verdict:", `**son grade whitelist est retirer.**`)
            warnc.send(warnigch3)

            Joueurwarn.removeRole(warnrl3.id);
        
          }
        } catch (e) {
          console.log(e);
        }
      }
    }

module.exports = WarnIG;


