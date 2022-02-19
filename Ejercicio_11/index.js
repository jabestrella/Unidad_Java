const times = [60, 75, 79, 80, 55, 59];

const total = times.reduce((acumulador, number) => acumulador + number, 0);
const media = total/times.length;

console.log('total', total)
console.log('media', media)