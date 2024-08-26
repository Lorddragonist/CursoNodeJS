console.log('Algo');
console.info('Algo más');
console.error('Algún error');

const tabla1 = [
	{
		nombre: 'Andres',
		apellido: 'Vargas',
	},
	{
		nombre: 'Estefanía',
		apellido: 'Calpa',
	},
];

console.table(tabla1);

console.group('Conversación');
console.log('Hola');
console.log('blablabla');
console.log('Adión');
console.groupEnd('Conversación');

function function1() {
	console.group('Función 1');
	console.log('esto es de la fun1');
	function2();
	console.log('Hemos vuelto a la función 1');
	console.groupEnd('Función 1');
}

function function2() {
	//
	console.group('Función 2');
	console.log('Ahora esto es la func2');
	console.groupEnd('Función 2');
}

console.log('\n\nEmpezamos');

function1();

console.log('\n\n');

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.log('\n');
console.count('veces');
