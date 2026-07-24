const mongoose = require("mongoose");

const rastroSchema = new mongoose.Schema({
    userId: String,
    username: String,
    userIP: String,
    lastSeen: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Rastro", rastroSchema);
