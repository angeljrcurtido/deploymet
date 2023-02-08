const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const UserSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: [true, "Ingresa un Nombre"]
    },
    apellido: {
      type: String,
      required: [true, "Ingresa un apellido"]
    },
    email: {
      type: String,
      required: [true, "Por favor ingresa un correo electronico"],
      validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Por favor ingresa una direccion de correo valida"
      }
    },
    password: {
      type: String,
      required: [true, "Por favor ingresa una contraseña"],
      minlength: [8, "Password must be 8 characters or longer"]
    }
  }, {timestamps: true});

UserSchema.pre('save', async function(next){  
try {
  const hashedPassword = await bcrypt.hash(this.password, 10)
  this.password = hashedPassword
  next()
  

}catch{
  console.log("Error en guardar usuario", error)
}})

  module.exports = mongoose.model('Usuario', UserSchema)