var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require ("mongoose");

var routes = require("./routes/routes.js");

var app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

routes(app);

var server = app.listen(3000 , function(){
    console.log("aplicacion corriendo en puerto", server.address().port);
});

mongoose.connect('mongodb://127.0.0.1:27017/todo-list', { useNewUrlParser : true})
.then(()=> {console.log('Conectado a la base de Mongo')})
.catch(()=>{ console.log('Error al conectarse a la base de datos de Mongo')})

