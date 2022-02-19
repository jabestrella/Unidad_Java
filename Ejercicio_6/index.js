'use strict';

// array de notas

const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];

// Cálculo de la suma total con el uso de iteradores.

// Bucle for.

// variable externa
let suma = 0;

for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
};
console.log('Con el bucle FOR la suma final es ' + suma);

// Bucle for...of.

// variable externa
let suma1 = 0;

for (let score of notas) {
  suma1 += score;
};
console.log('Con el bucle FOR OF la suma final es ' + suma1);