const http = require('http');

http.createServer((request, response) => { //request es la solicitud del cliente, response lo que el seervidor responde al cliente


        //response.setHeader('Content-Disposition','attachment; filename=lista.csv');
        // response.setHeader('Content-Disposition','attachment; filename=lista.csv');


        //response.writeHead(200, {'Content-Type':'application/csv'});
        // response.writeHead(200, {'Content-Type':'application/csv'});
        // response.writeHead(200, {'Content-Type':'application/json'});

        // const persona = {
        //     id:1,
        //     nombre:'Fernando'
        // }

        // response.write( JSON.stringify(persona));

        // response.write('id, nombre\n');
        // response.write('1, Maneper\n');
        // response.write('2, Maigo\n');
        // response.write('3, Luchoto\n');
        // response.write('4, Mana\n');
        // response.write('5, Xure\n');

        response.write('WENA');


        response.end(); //termina de reponder al cliente
    })
    .listen(8070);


console.log('Escuchabndo el puerto 8070');