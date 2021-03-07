const fs = require('fs');
const colors = require('colors')

const crearArchivo = async (base = 5, hasta, listar) => {
    
    try {
        let salidaConsola = "";
        let salidaArchivo = "";
    
        for (let i = 1; i <= hasta; i++) {
            salidaConsola += `${colors.yellow(base)} x ${colors.yellow(i)} = ${colors.yellow(base * i)}\n`;
            salidaArchivo += `${base} x ${i} = ${base * i}\n`
        }

        if (listar) {
            console.log("================".green);
            console.log(`  Tabla del ${colors.green(base)}`);
            console.log("================".green);
        
        
            console.log(salidaConsola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salidaArchivo);
        
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }


    //console.log(`tabla-${base}.txt creado`);
}

module.exports = { crearArchivo };