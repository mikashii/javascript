let contador = 1
while(contador <=10){
  console.log(`contador = ${contador}\n`)
  contador ++
}
for (let i = 0; i <= 10; i++){
  console.log(`O contador é ${i}`)
}







/*
for (let i = 1; i <= 10; i++){
console.log(`O contador é ${i}`)
}

// Loop para percorrer uma array
let Jhon = ['Jhon', 'Smith', 1990, 'designer', false]
// Começar o contador com 0, pois as arrays são 0 based
for (let  i = 0; i <= Jhon.length; i++){
  console.log(Jhon[i])
}
//Jhon e o indice que percorre todos os itens da array printando cada um.
// Usando o loop while

let i = 0 // declara a variável
while (i < Jhon.length){ // cria a condição de que enquanto o 'i' for menor que o comprimento da array
  console.log(Jhon[i]) //printa o 'i' de cada valor dela
  i++ //adicionando e quebrando o loop
}

// condições continue and break 

for (let  i = 0; i <= Jhon.length; i++){
  if (typeof Jhon[i] !== 'string') continue; // toda vez que o iten for diferente de umam string, o loop continuará. "Enquanto os itens forem "
  console.log(Jhon[i])
}



for (let  i = 0; i <= Jhon.length; i++){
  if (typeof Jhon[i] !== 'string') break; // toda vez que o iten for diferente de umam string, o loop vai parar no break
  console.log(Jhon[i])
}
*/

const Fill = {
  fullName: "Fill Phillips",
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];             //Array vazia
    this.finalValue = [];              //Array vazia

    for (i = 0; i <= this.bills.length; i++) {    // .lenght é o método de itens da array
      // determinar a porcentagem 
      let percentage;             // variavel do desconto
      let bill = this.bills[i];   // variavel para legibilidade

      if (bill < 50) {
        percentage = .2;
      } else if (bill >= 50 && bill < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }
      // adicionar resultados
      this.tips[i] = bill * percentage;
      this.finalValue[i] = bill + bill * percentage;
    }
  }
};

Fill.calcTips();
console.log(Fill);

/*

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
/*
arr.push['teste'[4]] // acrescenta um elemento
arr.pop //deleta um elemento (do fim)
console.log(arr)*/

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
/*
for (let i = 0; i < 10; i++){if (i % 2 == 0) continue;}
alert(i)

*/
