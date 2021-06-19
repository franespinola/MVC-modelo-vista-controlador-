
var express = require('express');
var path = require('path');
var app = express();

const rutaHome_about=require('./routes/routersHome')


app.use(express.static('public'));

app.use('/',rutaHome_about)


app.listen(3005,(req,res)=>{
  console.log('servidor funcionandoxfdfg');
})


