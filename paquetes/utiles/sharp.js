const sharp = require('sharp');

sharp('./original.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png', (err, info) => {
        console.log(info);
    }); 

