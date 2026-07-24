const mongoose = require("mongoose");

const staffWorkSchema = new mongoose.Schema({
    staffId: String,

    totalPagamentos: {
        type: Number,
        default: 0
    },

    valorTotalPago: {
        type: Number,
        default: 0
    },

    totalPagamentosGeral: {
        type: Number,
        default: 0
    },

    valorTotalGeral: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("StaffWork", staffWorkSchema);
