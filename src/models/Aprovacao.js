const mongoose = require("mongoose");

const aprovacaoSchema = new mongoose.Schema({
    staffId: String,

    aprovacoes: {
        type: Number,
        default: 0
    },

    tickets: {
        type: Number,
        default: 0
    },

    aprovacoesTotal: {
        type: Number,
        default: 0
    },

    ticketsTotal: {
        type: Number,
        default: 0
    },

    mensagensSemana: {
        type: Number,
        default: 0
    },

    mensagensTotal: {
        type: Number,
        default: 0
    }
});

aprovacaoSchema.index({ staffId: 1 });

module.exports = mongoose.model("Aprovacao", aprovacaoSchema);
