const mongoose = require('mongoose')

const Pessoa = mongoose.model('Pessoa', {
    nome: String, 
    salario: Number, 
    aprovado: Boolean, 
    idade: Number
})

module.exports = Pessoa