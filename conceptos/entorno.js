let nombre = process.env.NOMBRE || 'usuario no determinado';
let web = process.env.WEB || 'no tengo web';

console.log(`hola ${nombre},`);
console.log(`mi web es ${web}`);