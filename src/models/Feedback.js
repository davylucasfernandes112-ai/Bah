const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    staffId: String,

    positivos: {
        type: Number,
        default: 0
    },

    negativos: {
        type: Number,
        default: 0
    },

    positivosGeral: {
        type: Number,
        default: 0
    },

    negativosGeral: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Feedback", feedbackSchema);
