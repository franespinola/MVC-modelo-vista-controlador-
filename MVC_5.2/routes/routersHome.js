var express = require('express');
var router = express.Router();
const mainController=require('../controllers/mainController')

router.get('/detalle',mainController.detalleMenu) 
router.get('/index',mainController.index) 

module.exports = router;
