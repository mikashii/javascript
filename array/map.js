// Array map é um for com propósito
const nums = [1, 2, 3, 4, 5]              //cria o array
let resultado = nums.map(function(e){     //armazena o resultado na variável, e executa a função, dobrando os valores.
  return e * 2;
})
console.log(resultado)

const soma10 = e => e + 10

let result = nums.map(soma10)
console.log(result)

const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

console.log(nums.map(paraDinheiro, triplo))