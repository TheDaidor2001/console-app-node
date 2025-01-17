import fs from 'node:fs'
import { yarg } from './config/plugins/yargs.plugin';

const {b: base, l: limit, s: showTable} = yarg

let outputMessage = '';
const headerMessage = `
========================
Tabla del ${base}
========================
`;




for (let i = 1; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i} \n`;
}

outputMessage = headerMessage + outputMessage;

if(showTable) {
    console.log(outputMessage);
}


//Grabar en FileSystem

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('File created');
