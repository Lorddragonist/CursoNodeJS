const moment = require('moment');

let ahora = moment(); // Fecha y hora actual

console.log(ahora.toString());
console.log(ahora.format('YYYY/MM/DD - HH:mm')); // Formato personalizado
