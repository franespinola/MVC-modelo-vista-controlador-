var express = require('express');
var router = express.Router();
const mainController=require('../controllers/mainController')

router.get('/',mainController.index) 
router.get('/detalle',mainController.detalleMenu) 

module.exports = router;
