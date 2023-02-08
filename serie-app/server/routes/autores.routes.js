const ControladorAutores = require('../controllers/autores.controllers')
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {

    app.get('/api/obtenerautores', authenticate,ControladorAutores.obtenerAutores)
    app.get('/api/obtenerunaautores/:id', authenticate,ControladorAutores.obtenerUnaAutores)
    app.post('/api/crearautores', authenticate,ControladorAutores.crearAutores)
    app.put('/api/editarautores/:id', authenticate,ControladorAutores.editarAutores)
    app.delete('/api/borrarautores/:id', authenticate,ControladorAutores.eliminarAutores)
}
