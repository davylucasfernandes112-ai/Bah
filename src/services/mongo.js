const mongoose = require("mongoose");
const config = require("../config");

async function conectarMongo() {
    try {
        await mongoose.connect(config.MONGO_URI);

        console.log("🟢 MongoDB conectado com sucesso!");
    } catch (error) {
        console.error("🔴 Erro ao conectar ao MongoDB:");
        console.error(error);

        process.exit(1);
    }
}

module.exports = conectarMongo;
