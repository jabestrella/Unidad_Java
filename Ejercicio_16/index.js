// Enlaces de la página.

const enlaces = document.getElementsByTagName('a');

// Dirección penúltimo enlace.

const penultima = enlaces[enlaces.length - 1].href;

// Enlaces del tercer párrafo.
const third = document.getElementById('third-paragraph');
const numberLinks = third.getElementsByTagName('a').length;

// Mostrar el primer resultado 
const primerresultado = document.querySelector('#number-links');
primerresultado.innerHTML = `En esta página hay ${enlaces.length} enlaces`;

// Crear un nodo para el segundo 
const segundoresultado = document.createElement('p');
const contentsegundoresultado = document.createTextNode(penultima);
segundoresultado.appendChild(contentsegundoresultado);

const resultadoparrafo = document.querySelector('.results');
resultadoparrafo.appendChild(segundoresultado);

// Mostrar el tercer resultado
const tercerresultado = document.querySelector('#third-result');
tercerresultado.innerHTML = `En el tercer párrafo hay ${numberLinks} enlaces.`;