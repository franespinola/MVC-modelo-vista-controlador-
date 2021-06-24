
const express = require('express');

const app = express();

const rutaHome_about=require('./routes/routersHome')    //importamo la ruta y la guardamos en una variable

/*app.get('/',function(req,res){
  res.send('servidor funcionando')
})*/      //probamos que el servidor funcione

app.use(express.static('public'));   //hacemos la ruta public estatica

app.set('view engine','ejs');          //configuramos el motor de plantilla para que sea ejs


app.use('/',rutaHome_about)


app.listen(3006,(req,res)=>{
  console.log('servidor funcionando');
})


