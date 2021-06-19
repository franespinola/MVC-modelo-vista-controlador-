const path=require('path')
const controlador={
    detalleMenu:(req,res)=>{
        res.render('detalleMenu')
    },
    index:(req,res)=>{
        res.render('index')
    }
}

module.exports=controlador;

