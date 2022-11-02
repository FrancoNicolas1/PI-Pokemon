const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const infoPokemons = require("./Pokemon.js")
const infoTypes = require("./Types.js")

const router = Router();
router.use("/pokemon",infoPokemons)
router.use("/type",infoTypes)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
