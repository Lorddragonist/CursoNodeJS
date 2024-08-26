function otraFuncion() {
	seRompe();
}

function seRompe() {
	return 3 + z;
}

function seRompeAsincrona() {
	setTimeout(function () {
		return 3 + z;
	});
}

try {
	seRompeAsincrona();
} catch (error) {
	console.error('error ocurrido');
	console.error(error);
}

console.log('\nEsto está al final');
