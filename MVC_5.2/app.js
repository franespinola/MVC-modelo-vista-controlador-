
var express = require('express');
var path = require('path');
var app = express();

const rutaHome_about=require('./routes/routersHome')


app.use(express.static('public'));

app.set('view engine','ejs');          //configuramos el motor de plantilla para que sea ejs


app.use('/',rutaHome_about)


app.listen(3006,(req,res)=>{
  console.log('servidor funcionando');
})


