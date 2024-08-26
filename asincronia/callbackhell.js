const hola = (nombre, callback) => {
    setTimeout(() => {
        console.log(`Hola ${nombre}`);
        callback(nombre);
    }, 1500)
}

const hablar = (callback) => {
    setTimeout(() => {
        console.log('bla bla bla');
        callback();
    }, 1000)
}

const adios = (nombre, callback) => {
    setTimeout(
        () => {
            console.log(`Adios ${nombre}`);
            callback();
        }, 1000
    );
}

const conversacion = (nombre, veces, callback)=>{
    if(veces>0){
        hablar(()=>{
            conversacion(nombre, --veces, callback);
        }) 
    }else{
        adios(nombre, callback);
    }
}

console.log('Iniciando proceso...');
hola('Felipe',(nombre)=>{
    conversacion(nombre, 3, ()=>{
        console.log('Proceso terminado');
    });
})

// hola('Felipe', (nombre) => {
//     hablar(()=>{
        
//         adios(nombre, ()=>{
//             console.log('Terminando proceso...');
//         })
//     });
// })
