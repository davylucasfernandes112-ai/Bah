// ======================================================
// IMPORTAÇÕES
// ======================================================

const {
    Client,
    GatewayIntentBits,
    Partials,
    Collection
} = require("discord.js");

const config = require("./config");
const conectarMongo = require("./services/mongo");

// ======================================================
// INICIALIZAÇÃO DO CLIENT
// ======================================================

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages
    ],

    partials: [
        Partials.Channel,
        Partials.Message,
        Partials.Reaction,
        Partials.User,
        Partials.GuildMember
    ]
});

// ======================================================
// COLEÇÕES GLOBAIS
// ======================================================

client.commands = new Collection();
client.buttons = new Collection();
client.modals = new Collection();
client.menus = new Collection();

global.client = client;

// ======================================================
// BANCO DE DADOS
// ======================================================

conectarMongo();

// ======================================================
// CARREGAMENTO DOS MODELS
// ======================================================

// require("./models/Suspensao");
// require("./models/Pagamento");
// require("./models/Aval");
// require("./models/FichaPersonagem");
// require("./models/Advertido");
// require("./models/Rastro");
// require("./models/Contador");
// require("./models/StaffWork");

// ======================================================
// EVENTOS
// ======================================================

// require("./events/ready")(client);
// require("./events/guildMemberAdd")(client);
// require("./events/guildMemberUpdate")(client);
// require("./events/messageCreate")(client);
// require("./events/interactionCreate")(client);

// ======================================================
// CRON JOBS
// ======================================================

// require("./cron/advertencias")(client);
// require("./cron/suspensoes")(client);

// ======================================================
// LOGIN
// ======================================================

client.login(config.TOKEN);

// ======================================================
// ANTI-CRASH
// ======================================================

process.on("unhandledRejection", (reason) => {
    console.error("=== UNHANDLED REJECTION ===");
    console.error(reason);
});

process.on("uncaughtException", (error) => {
    console.error("=== UNCAUGHT EXCEPTION ===");
    console.error(error);
});

process.on("warning", (warning) => {
    console.warn("=== WARNING ===");
    console.warn(warning);
});
