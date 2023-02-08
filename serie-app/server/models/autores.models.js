const mongoose = require ('mongoose')


//Schema

const AutoresSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true, "Por favor agrega un Autor"],
        minLength:[3, "Autor no puede ser menor a 3 caracteres"]
    }

},{timestamps:true})


const Autores = mongoose.model('Autores', AutoresSchema)
module.exports = Autores