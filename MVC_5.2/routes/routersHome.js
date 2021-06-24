var express = require('express');
var router = express.Router();
const mainController=require('../controllers/mainController')

router.get('/',mainController.index) //lleva 2 parametros en el primero la ruta, y en el segundo el metodo cuando me posiciono en esa ruta
router.get('/detalle/:id',mainController.detail) 

module.exports = router;
