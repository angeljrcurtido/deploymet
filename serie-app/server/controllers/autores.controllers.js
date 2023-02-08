const Autores = require('../models/autores.models')

const obtenerAutores = (req, res)=>{
    Autores.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const obtenerUnaAutores = (req, res)=>{
    Autores.findById(req.params.id)
    .then((resultado)=>{
        console.log(resultado)
        res.json(resultado)

    }).catch((err)=>{
        console.log(err)
    })
}

const crearAutores = (req, res)=>{
    Autores.create(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
        res.status(400).json(error)
    })
}

const editarAutores = (req, res)=>{
    Autores.updateOne({_id:req.params.id},req.body, {runValidators:true})
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
        res.status(400).json(error)
    })
}

const eliminarAutores = (req, res)=>{
    Autores.deleteOne({_id:req.params.id})
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
} 


module.exports = {
    obtenerAutores,
    obtenerUnaAutores,
    crearAutores,
    editarAutores,
    eliminarAutores
}