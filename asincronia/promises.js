const hola = (nombre) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(`Hola ${nombre}`);
            resolve(nombre);
        }, 1500);
    });

}

const hablar = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla');
            //resolve(nombre);
            reject('hay un error')
        }, 1000)
    })

}

const adios = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log(`Adios ${nombre}`);
                resolve();
            }, 1000
        );
    })

}


// ---

console.log('Iniciando el proceso...');
hola('Andrés')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso');
    })
    .catch(error => {
        console.error('ha habido error')
        console.error(error)
    })