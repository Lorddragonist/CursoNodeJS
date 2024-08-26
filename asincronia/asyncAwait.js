const hola = async (nombre) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(`Hola ${nombre}`);
            resolve(nombre);
        }, 1500);
    });

}

const hablar = async (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla');
            resolve(nombre);
            
        }, 1000)
    })

}

const adios = async (nombre) => {
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

async function main(){
    let nombre = await hola('Andrés');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso');
}

console.log('Empezamos el proceso...');
main();
