const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
	console.log('nueva petición');
	console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hola, ¿qué tal?');
            res.end();
            break;
        default:
            res.write('Error 404: No sé lo que quieres');
            res.end();
    }

	// res.writeHead(201, { 'Content-Type': 'text/plain' });

	// res.write('Hola ya sé usar http de Node.js');

	// res.end();
}

console.log('Escuchando http en el puerto 3000');
