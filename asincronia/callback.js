const hola = (nombre, callback)=>{
    setTimeout(()=>{
        console.log(`Hola ${nombre}`);
        callback(nombre);
    }, 1500)
}

const adios = (nombre, callback)=>{
    setTimeout(
        ()=>{
            console.log(`Adios ${nombre}`);
            callback();
        }, 1000
    );
}

console.log('Iniciando proceso...');
hola('Felipe',(nombre)=>{
    adios(nombre,()=>{
        console.log('Terminando proceso...');
    })
})