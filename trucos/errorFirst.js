function asincrona(callback) {
	setTimeout(function () {
		try {
			let a = 3 + z;
			callback(null, a);
		} catch (e) {
			callback(e);
		}
	}, 1000);
}

// Como no hacerlo

// try {
// 	asincrona(function (err, dato) {
// 		if (err) {
// 			// console.error('Tenemos un error');
// 			// console.error(err);
// 			// return false;
// 			throw err;
// 		}
// 		console.log('Todo ha ido bien, mi dato es', dato);
// 	});
// } catch (error) {
//     console.error('Hemos capturado un error');
//     console.error(error.message);
// }

// Como sí hacerlo

asincrona(function (err, dato) {
    if (err) {
        console.error('Tenemos un error');
        console.error(err.message);
        return false;
        // throw err;
    }
    console.log('Todo ha ido bien, mi dato es', dato);
});
