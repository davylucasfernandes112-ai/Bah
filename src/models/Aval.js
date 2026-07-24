const mongoose = require("mongoose");

const avalSchema = new mongoose.Schema({
    userId: String,
    guildId: String,
    motivo: String,
    dataEntrada: String,
    dataSaida: String,
    timestampSaida: Date,
    status: {
        type: String,
        default: "pendente"
    }
});

module.exports = mongoose.model("Aval", avalSchema);
