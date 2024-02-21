const hbs = require('hbs');
const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT;




//todo required('hbs') Handlebars
app.set('view engine', 'hbs'); //renderiza las vistas a utilizar. En este caso se usa hbs, solo se debe sacar para consumir los archivos .html de la carpeta old-back (backup)
hbs.registerPartials(__dirname + '/views/partials', function(err) {});


// Servir contenido estatico
app.use(express.static('public')); //va directo a un archivo que se llame index.html. En caso de tener la carpeta "public" en otro directorio. Este debe ser rspecificado

app.get('/', (req, res) => {
    res.render('home', {
        nombre: "Zerinho Best",
        titulo: 'Soy el mejor'
    });
});

app.get('/hola-mundo', (req, res) => {
    res.send('WENA MALO PAL CATRE')
});

app.get('/generic', (req, res) => {
    // res.send('ERRRORRRRR MORIREMOS TODOS')
    // res.sendFile(__dirname + '/public/generic.html')
    res.render('generic', {
        nombre: "Zerinho Best",
        titulo: 'Soy el mejor'
    });
});

app.get('/elements', (req, res) => {
    // res.send('ERRRORRRRR MORIREMOS TODOS')
    // res.sendFile(__dirname + '/public/elements.html')
    res.render('elements', {
        nombre: "Zerinho Best",
        titulo: 'Soy el mejor'
    });
});

app.get('*', (req, res) => { // * = Comodin. En caso que no se encuentre la ruta a acceder
    // res.send('ERRRORRRRR MORIREMOS TODOS')
    res.sendFile(__dirname + '/public/old-back/404.html') //__dirname = es el path donde esta alojada la app (raiz)
});

// app.get('*', function(req, res) {puedes cambiar la palabra funcion por una funcion de flecha
//     // res.send('ERRRORRRRR MORIREMOS TODOS')
//     res.sendFile(__dirname + '/public/404.html')
// });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})