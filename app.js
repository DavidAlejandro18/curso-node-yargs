const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.log('\x1Bc'); // console.clear() no me funciono en Windows 8.1

crearArchivo(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, "creado"))
    .catch(err => console.log(err));