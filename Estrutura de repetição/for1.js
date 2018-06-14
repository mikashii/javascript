let contador = 1
while (contador <= 10){
  console.log('O contador agora é ' + contador)
  contador++
}


for (let i = 1; i <= 10; i++)
console.log(`O contador é ${i}`)



let numero2 = 4
let numero4 = 'quatro'

console.log(`\n${numero2} não é ${numero4}`)

const notas = [6.7, 4.3, 7.3, 2.5, 3.5, 2.1]
for (let i = 0; i < notas.length; i++){
  console.log(`notas =  ${notas[i]}`)
}


const soma = function(x, y) {
  return x + y;
};
//                                   \/ o parâmetro, se vazio, assume a função soma acima
const imprimirResultado = function(a, b, operacao = soma) {
  console.log(operacao(a, b)); // chama a função operação, que é igual a "soma" e atribui os valores de 'a' e 'b'
};
imprimirResultado(1, 2);
imprimirResultado(1, 2, soma);
imprimirResultado(1, 2, (x, y ) => {return  x - y});
imprimirResultado(3, 2, (x, y) => x * y);


imprimirResultado(80, 32, (x, y) => x / y);

//

let arr = ['Modelo', 'Fabricante']
console.log(arr[0])
/*  arr[1] = 'Cor' // replace element
arr[3] = 'Fabricante' // add a element to the array  */

arr.push['teste'[4]] // acrescenta um elemento
arr.pop //deleta um elemento (do fim)
console.log(arr)


/*



for (; i < 3; i++){  // omitir a declaração de i = o se não há necessidade de fazer algo com ele
  console.log(i)
}
let i
for (; i < 3;){alert(i++)} // omitir o passo ' i++'
// no FOR, é necessário usar ; 


*/






/* Loop break 
let sum = 0 

while (true){
  let value = parseInt(prompt(`Entre com um número: `));
  if (!value) break;
  sum += value
}
console.log(`Sum: ${sum}`)    */


// continue  to next interation

// Uma versão 'light' de break, ele não para o loop, ele força o inicio de um outro loop

for (let i = 0; i < 10; i++){if (i % 2 == 0) continue;}
alert(i)