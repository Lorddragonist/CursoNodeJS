console.time('todo');

let suma = 0;

console.time('bucle');
for (let i = 0; i < 10000; i++) {
    suma += 1;
}
console.timeEnd('bucle');

function asincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Termina el proceso asíncrono');
            resolve();
        }, 1000);
    });
}


console.time('bucle 2');
for (let i = 0; i < 100000; i++) {
    suma += 1;
}
console.timeEnd('bucle 2');

console.time('asincrona');
console.log('Empieza el proceso asíncrono');
asincrona()
    .then(() => {
        console.timeEnd('asincrona');
    });


console.timeEnd('todo');