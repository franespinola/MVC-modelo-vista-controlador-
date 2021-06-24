const data=require('../database/data');
const controlador={
    index:(req,res)=>{
        res.render('index',{platos:data})   //el primer dato  es el nombre q le damos a la variable y en la segunda posicion tenemos el objeto q creamos
    },
    detail:(req,res)=>{
        let id=req.params.id         
        let platoEncontrado =null             
        for(let i=0;i<data.length;i++){
              if(data[i].id ==id){
                platoEncontrado= data[i]
              }         
        }
       /*let platoEncontrado=data.filter((dato=>{
           return plato.id==id
       res.send(platoEncontrado)
        })  */
        
        
        res.render('detalleMenu',{plato:platoEncontrado})
        
    }
}



module.exports=controlador;

