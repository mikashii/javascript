var a = 3;
let b = 4;

var a = 40;
b = 30;

console.log(a, b);
/*

*/

const peso1 = 1.0;
const peso2 = Number("3.0");
console.log(peso1, Number.isInteger(peso2)); // verifica se a variavel 'peso2' é um número inteiro.

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

function soma() {
  total = avaliacao1 * peso1 + avaliacao2 * peso2;
  media = total / (peso1 + peso2);
  console.log (media);
}
soma();

typeof peso2
