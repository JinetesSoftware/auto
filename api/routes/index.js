const express = require("express");
const fs = require("fs");
const router = express.Router();
 
const PATH_ROUTES = __dirname;
const routes = fs.readdirSync(PATH_ROUTES);
const removeExtension = (fileName => fileName.split('.').shift())

/**
 * Carga Dinámica
 **/
routes.filter((file)=> {
    const name = removeExtension(file);
    if(name !== 'index') router.use(`/${name}`, require(`./${file}`))
})

module.exports = router