const mongoose = require("mongoose");

const contadorSchema = new mongoose.Schema({
    nome: String,
    valor: Number
});

module.exports = mongoose.model("Contador", contadorSchema);
