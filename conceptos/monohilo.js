console.log('Hola mundo');

let i = 0;
setInterval(function () {
	//..
	console.log(i);
	i++;

	if (i === 5) {
		console.log('forzamos error');
		let a = 3 + z;
	}
}, 1000);

console.log('segunda instruccion');
