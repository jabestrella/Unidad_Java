const topics = ['JavaScript', 'Variables', 'funciones', 'condicionales', 'bucles'];

// Transformación de array a mayusculas, uso de map.

// Uso de reverse para colocar sus elementos en orden inverso al original.

const MAYUSCULA = topics.map(Array => Array.toUpperCase());
MAYUSCULA.reverse();

console.log('topics', topics);
console.log('MAYUSCULA', MAYUSCULA);