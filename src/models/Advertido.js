const mongoose = require("mongoose");

const advertidoSchema = new mongoose.Schema(
{
    userId: {
        type: String,
        required: true,
        unique: true
    },

    advertencias: {
        type: Number,
        default: 0
    },

    historico: [
        {
            motivo: String,

            staff: String,

            data: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

module.exports = mongoose.model("Advertido", advertidoSchema);
