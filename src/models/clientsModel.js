const mongoose = require('mongoose');


const clientSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    email: String,
    cidade: String,
    telefone: String,
});

module.exports = mongoose.model('GerenciamentoCliente', clientSchema);

