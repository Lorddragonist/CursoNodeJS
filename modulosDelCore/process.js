//const process = require('process');

process.on('beforeExit', () => {
	console.log('El proceso va a terminar');
});

process.on('exit', () => {
	console.log('El proceso terminó');
});

process.on('uncaughtException', (err, origen) => {
	console.error('Vaya se nos ha olvidado capturar un error');
	console.error(err.message);
});


llamar();