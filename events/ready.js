const Discord = require("discord.js");
const { promisify } = require('util');
const wait = promisify(setTimeout);

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

        this.client.logger.log(
            `Hihi je suis prêt à espionner ${
          this.client.users.size
        } utilisateurs sur ${this.client.channels.size} salons.`,
            "ready"
        );
    }
};