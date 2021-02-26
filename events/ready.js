const Discord = require("discord.js");

module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run() {
        await this.client.wait(1000);

        this.client.appInfo = await this.client.fetchApplication();
        setInterval(async() => {
            this.client.appInfo = await this.client.fetchApplication();
        }, 60000);

        this.client.user.setActivity("WickedLife | SYS.");
        this.client.user.setStatus("dnd");

        //const channelmsg = this.client.channels.get("792503569584226304");
        //let topvote = new Discord.RichEmbed()
         //.setColor("#ffa300")
         //.setAuthor(this.client.user.username, this.client.user.displayAvatarURL)
         //.setTitle(`Vous pouvez voter toute les 2 heures par adresse ip et récupérer une récompense.`)
         //.setFooter('Vous devez écrire votre nom steam pour recevoir la récompense')
         //.setDescription(`https://top-serveurs.net/gta/wickedliferp`)

         //setInterval(() => {
            // channelmsg.send(topvote)

        // }, 3600000);

        //const channel = this.client.channels.get("792505732225957968");
        //channel.send(":gear: J'ai bien redémarré !")


        this.client.logger.log(
            `Hihi je suis prêt à espionner ${
          this.client.users.size
        } utilisateurs sur ${this.client.channels.size} salons.`,
            "ready"
        );
    }
};