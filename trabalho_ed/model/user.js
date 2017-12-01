const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    nome: String,
    nascimento: Date,
    profissao: String
})


const User = mongoose.model('User', UserSchema)

module.exports = User