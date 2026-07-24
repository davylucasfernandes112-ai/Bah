const mongoose = require("mongoose");

const pagamentoSchema = new mongoose.Schema({
    userId: {
        type: String
    },

    acao: {
        type: String
    },

    cooldownAte: {
        type: Date
    }
});

module.exports = mongoose.model("Pagamento", pagamentoSchema);
