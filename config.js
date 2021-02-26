const config = {
    defaultSettings: {
        prefix: "!",
        modLogChannel: "logs-discord",
        Whitelist: "Whitelist",
        Donateur: "Donateur",
        Booster: "Booster",
        Contributeur: "Contributeur",
        Douanier: "Douanier",
        Assistant: "Assistant",
        Modo:"Modo",
        Developpeur: "Développeur",
        Responsable: "Responsable",
        Admin: "Admin",
        systemNotice: true
    },
    permLevels: [
        { level: 0, name: "Joueur", check: () => true },

        {
            level: 1,
            name: "Whitelist",
            check: message => {
                try {
                    const Whitelist = message.guild.roles.find(r => r.name.toLowerCase() ===
                        message.settings.Whitelist.toLowerCase()
                    );
                    if (Whitelist && message.member.roles.has(Whitelist.id)) return true;
                } catch (e) {
                    return false;
                }
            }
        },

        {
            level: 2,
            name: "Donateur",
            check: message => {
                try {
                    const Donateur = message.guild.roles.find(r => r.name.toLowerCase() ===
                        message.settings.Donateur.toLowerCase()
                    );
                    if (Donateur && message.member.roles.has(Donateur.id)) return true;
                } catch (e) {
                    return false;
                }
            }
        },

        {
            level: 3,
            name: "Booster",
            check: message => {
                try {
                    const Booster = message.guild.roles.find(r => r.name.toLowerCase() ===
                        message.settings.Booster.toLowerCase()
                    );
                    if (Booster && message.member.roles.has(Booster.id)) return true;
                } catch (e) {
                    return false;
                }
            }
        },

        {
            level: 4,
            name: "Contributeur",
            check: message => {
                try {
                    const Contributeur = message.guild.roles.find(r => r.name.toLowerCase() ===
                        message.settings.Contributeur.toLowerCase()
                    );
                    if (Contributeur && message.member.roles.has(Contributeur.id)) return true;
                } catch (e) {
                    return false;
                }
            }
        },
        
        {
            level: 5,
            name: "Douanier",
            check: message => {
                try {
                    const Douanier = message.guild.roles.find(r => r.name.toLowerCase() ===
                        message.settings.Douanier.toLowerCase()
                    );
                    if (Douanier && message.member.roles.has(Douanier.id)) return true;
                } catch (e) {
                    return false;
                }
            }
        },

        {
            level: 6,
            name: "Assistant",
            check: message => {
                try {
                    const Assistant = message.guild.roles.find(r => r.name.toLowerCase() ===
                        message.settings.Assistant.toLowerCase()
                    );
                    if (Assistant && message.member.roles.has(Assistant.id)) return true;
                } catch (e) {
                    return false;
                }
            }
        },

        {
            level: 7,
            name: "Modo",
            check: message => {
                try {
                    const Modo = message.guild.roles.find(r => r.name.toLowerCase() ===
                        message.settings.Modo.toLowerCase()
                    );
                    if (Modo && message.member.roles.has(Modo.id)) return true;
                } catch (e) {
                    return false;
                }
            }
        },

        {
            level: 8,
            name: "Développeur",
            check: message => {
                try {
                    const Developpeur = message.guild.roles.find(r => r.name.toLowerCase() ===
                        message.settings.Developpeur.toLowerCase()
                    );
                    if (Developpeur && message.member.roles.has(Developpeur.id)) return true;
                } catch (e) {
                    return false;
                }
            }
        },

        {
            level: 9,
            name: "Responsable",
            check: message => {
                try {
                    const Responsable = message.guild.roles.find(r => r.name.toLowerCase() ===
                        message.settings.Responsable.toLowerCase()
                    );
                    if (Responsable && message.member.roles.has(Responsable.id)) return true;
                } catch (e) {
                    return false;
                }
            }
        },

        {
            level: 10,
            name: "Admin",
            check: message => {
                try {
                    const Admin = message.guild.roles.find(r => r.name.toLowerCase() ===
                        message.settings.Admin.toLowerCase()
                    );
                    if (Admin && message.member.roles.has(Admin.id)) return true;
                } catch (e) {
                    return false;
                }
            }
        },


    ]

};

module.exports = config;