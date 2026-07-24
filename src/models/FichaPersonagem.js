const mongoose = require("mongoose");

const fichaPersonagemSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },

    mensagemId: {
        type: String,
        default: null
    },

    canalId: {
        type: String,
        default: null
    },

    status: {
        type: String,
        default: "pendente"
    },

    personagem: {
        type: Object,
        default: {}
    },

    criadoEm: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("FichaPersonagem", fichaPersonagemSchema);
