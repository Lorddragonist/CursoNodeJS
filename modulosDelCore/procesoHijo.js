const { exec, spawn } = require('child_process');

exec('node modulosDelCore/globales.js', (err, stdout, sterr) => {
	if (err) {
		console.error(err);
		return false;
	}

	console.log(stdout);
});

console.log('\n');

let proceso = spawn('ls', ['-la']);

//console.log(proceso.pid);

proceso.stdout.on('data', function (dato) {
    console.log('Está muerto?');
    console.log(proceso.killed);
	console.log(dato.toString());
});


proceso.on('exit', function(){
    console.log('El proceso terminó');
    console.log(proceso.killed);
})