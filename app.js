const hbs = require('hbs');
const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT;




//todo required('hbs') Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err) {});


// Servir contenido estatico
app.use(express.static('public')); //va directo a un archivo que se llame index.html

app.get('/', function(req, res) {
    res.render('home', {
        nombre: "Zerinho Best",
        titulo: 'Soy el mejor'
    });
});

app.get('/hola-mundo', function(req, res) {
    res.send('WENA MALO PAL CATRE')
});

app.get('/generic', function(req, res) {
    // res.send('ERRRORRRRR MORIREMOS TODOS')
    // res.sendFile(__dirname + '/public/generic.html')
    res.render('generic', {
        nombre: "Zerinho Best",
        titulo: 'Soy el mejor'
    });
});

app.get('/elements', function(req, res) {
    // res.send('ERRRORRRRR MORIREMOS TODOS')
    // res.sendFile(__dirname + '/public/elements.html')
    res.render('elements', {
        nombre: "Zerinho Best",
        titulo: 'Soy el mejor'
    });
});

app.get('*', function(req, res) {
    // res.send('ERRRORRRRR MORIREMOS TODOS')
    res.sendFile(__dirname + '/public/404.html')
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})