const os = require('os');

console.log(os.arch());

console.log('\n');
console.log(os.platform());

console.log('\n');
console.log(os.cpus());

console.log('\n');
console.log(os.cpus().length);

console.log('\n');
console.log(os.constants);

console.log('\n');

const SIZE = 1024;

function kb(bytes) {
    return bytes / SIZE;
}

function mb(bytes) {
    return kb(bytes) / SIZE;
}

function gb(bytes) {
    return mb(bytes) / SIZE;
}

console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));


console.log('\n');
console.log(os.totalmem());

console.log('\n');
console.log(os.homedir());

console.log('\n');
console.log(os.tmpdir());

console.log('\n');
console.log(os.hostname());

console.log('\n');
console.log(os.networkInterfaces());