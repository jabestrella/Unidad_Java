const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const longmonths = meses
.filter(Array => Array.length > 7)
.map(Array => Array.toUpperCase());

console.log (longmonths);

const numerodemeses = longmonths.length;
console.log(`Solo ${numerodemeses} meses`);