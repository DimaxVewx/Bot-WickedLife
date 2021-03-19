module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run(oldMember, newMember) {
        if (!oldMember.premiumSince && newMember.premiumSince) {
            return this.client.channels.cache.get("792502959254011995").send(`Wawwwouuuu ! **${newMember.user.tag}** vient de boost notre serveur. Un gros merci à toi !`)
        }
    }
};