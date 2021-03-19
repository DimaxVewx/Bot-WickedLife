const Discord = require("discord.js")
module.exports = class {
    constructor(client) {
      this.client = client;
    }
  
    async run(message) {
      if (message.author.bot) return;
      const joueurcc = message.author;
      let messagemaintenance = `
            ⚠**__Message Important__** ⚠ - **Prendre le temps de lire **
  ** No CitizenFX ticket was specified, If this is an offline server, maybe set sv_lan ** ? 
     Il sera probablement corrigé dans les prochaines heures. Pas de nouvelle car nous n'avons aucun contrôle là-dessus.
     Merci pour votre patience et bonne journée.
      `;


      //  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ MESSAGE BONJOUR REPLY ! \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      
      switch (message.content.toLowerCase()) {
        case 'salut':
        case 'bonjour':
        case 'yo':
        case 'cc':
        case 'bjr':
        case 'bonsoir':
        case 'bonne nuit':
        case 'bonne soirée':
        case 'à demain':
        case '++':
        case 'aurevoir':
        case 'dormez bien':                    
        case 'bn':
        case 'tchao':
        case 'good bye':
        case 'bye':

          message.react('👋');
          break;
          default:
            // R
      }



            //  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

      //  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ Insultes \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\   
      
      let ohlalalagromos = ["fdp", "fils de pute", "connard", "tg", "va te faire", "ftg"]

      if (ohlalalagromos.some(word => message.content.toLowerCase().includes(word))) {
        await message.delete();
        return message.channel.send("Non, pas d'insultes ici...")
      }


    


      // Système de level !

      if (message.guild) {
        this.client.points.ensure(`${message.guild.id}-${message.author.id}`, {
          user: message.author.id,
          guild: message.guild.id,
          points: 0,
          level: 1
        });

        const key = `${message.guild.id}-${message.author.id}`;

        this.client.points.inc(key, "points");
  
        const curLvl = Math.floor(
          0.1 * Math.sqrt(this.client.points.get(key, "points"))
        );
  
        if (this.client.points.get(key, "level") < curLvl) {
          message.channel.send(
            `Wawwwwouuuu, tu passes niveau ***${curLvl}***! bien jouer`
          );
          this.client.points.set(key, curLvl, "level");
        }
      }

      // PAS BESOIN POUR l'INSTANT ! 
      //var maintenancec = this.client.channels.get("739368661160296479");
      //message.delete(maintenancec);
      //maintenancec.send(messagemaintenance);

      //








      // Events messages event etc...
  
      if (
        !message.channel.permissionsFor(message.guild.me).missing("SEND_MESSAGES")
      )
        return;
  
      const settings = this.client.getSettings(message.guild);
      message.settings = settings;
  
      if (message.content.indexOf(settings.prefix) !== 0) return;
  
      const args = message.content
        .slice(settings.prefix.length)
        .trim()
        .split(/ +/g);
      const command = args.shift().toLowerCase();
  
      if (message.guild && !message.member)
        await message.guild.fetchMember(message.author);
  
      const level = this.client.permlevel(message);
  
      const cmd =
        this.client.commands.get(command) ||
        this.client.commands.get(this.client.aliases.get(command));
      if (!cmd) return;
  
      if (level < this.client.levelCache[cmd.conf.permLevel]) {
        if (settings.systemNotice === "true") {
          return message.channel
            .send(`Vous n'avez pas la permission pour utiliser cette commande.
          Votre niveau de permission est ${level} (${
            this.client.config.permLevels.find(l => l.level === level).name
          })
          Cette commande requirt le niveau de permission: ${
            this.client.levelCache[cmd.conf.permLevel]
          } (${cmd.conf.permLevel})`);
        } else {
          return;
        }
      }
  
      message.author.permLevel = level;
  
      message.flags = [];
      while (args[0] && args[0][0] === "-") {
        message.flags.push(args.shift().slice(1));
      }
  
      // logs
      this.client.logger.log(
        `${message.author.username} (${message.author.id} - ${
          this.client.config.permLevels.find(l => l.level === level).name
        }) lance la commande ${cmd.help.name}`
      );
      cmd.run(message, args, level);

      //

    }
  };