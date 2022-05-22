const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const videogameRoute= require ('./videogames')
const generoRoute= require ('./generos')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogameRoute)
router.use('/generos', generoRoute)

module.exports = router;
