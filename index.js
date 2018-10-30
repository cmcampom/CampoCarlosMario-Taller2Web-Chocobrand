const express = require ('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const MongoClient = require ('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const dbName = 'elementos';

const client = new MongoClient(url);
var db= null;

const app = express();

app.engine('handlebars',hbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

client.connect(function(err){

    if(err){
        console.error(err);
        response.send(err);
        return;
    }
    db = client.db(dbName);
});

app.get('/', function(request, response){

    const collection = db.collection('muffins');

    collection.find({}).toArray(function(err,docs){

        if(err){
            console.error(err);
            response.send(err);
            return;
        };

        var contexto = {
            products: docs,
            nombre : "NombrePrueba",
            precio : "100",
            especial : false,
            gluten : true,
            dulce: 60,
            fav: false,
            car: false,
            img: "/public//img//rubySunset.png"
        };
    
        response.render('ultcolec',contexto);



    })
});


app.listen(5500,function(){

    console.log('Inicia Proceso');

});