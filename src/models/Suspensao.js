const mongoose = require("mongoose");

const suspensaoSchema = new mongoose.Schema({
    userId: String,
    guildId: String,
    roleId: String,
    expiresAt: Date
});

suspensaoSchema.index({ userId: 1 });

module.exports = mongoose.model("Suspensao", suspensaoSchema);
