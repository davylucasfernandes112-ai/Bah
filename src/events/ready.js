const { Events, ActivityType } = require("discord.js");

module.exports = {
    name: Events.ClientReady,
    once: true,

    async execute(client) {
        try {
            console.clear();

            console.log("========================================");
            console.log(`🤖 Bot conectado como ${client.user.tag}`);
            console.log(`🆔 ID: ${client.user.id}`);
            console.log(`🌎 Servidores: ${client.guilds.cache.size}`);
            console.log(`👥 Usuários: ${client.users.cache.size}`);
            console.log("========================================");

            client.user.setPresence({
                activities: [
                    {
                        name: "Cidade Sampa RP",
                        type: ActivityType.Watching
                    }
                ],
                status: "online"
            });

            console.log("✅ Evento Ready carregado com sucesso!");

        } catch (error) {
            console.error("Erro no evento ready:");
            console.error(error);
        }
    }
};
