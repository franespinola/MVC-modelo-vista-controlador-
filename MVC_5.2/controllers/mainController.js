const fs = require('fs');

const platos = fs.readFileSync('platos.json');
const platosJSON = JSON.parse(platos);

const controlador={
    index:(req,res)=>{
        res.render('index')
    },
    detalleMenu:(req,res)=>{
        res.render('detalleMenu',platosJSON)
    }
}

module.exports=controlador;

