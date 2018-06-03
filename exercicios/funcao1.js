// Uma função é uma ação, executa um processo.
/* 
Uma função é um bloco de código que pode ser usado várias vezes, podendo ou não, retornar um resultado

*/

// Função sem retorno

/* function imprimirSoma(a, b){
 console.log (a+b)
}


imprimirSoma(2,4)

//Função com retorno

function soma(a, b = 0){ //Valor padrão de 0, atribuido caso não acha um segundo parâmetro declarado na função
    return a + b
}
soma(3,2)

console.log(soma(3,5))
console.log(soma(3))

*/

// AULA DOIS//

// Função anônima não possui nome, apenas o bloco de código, ex const teste = function(){}

/* ----------
---------- */


//Armazenando uma função em uma variável
const imprimirSoma = function(a, b){
    console.log(a + b)
}
imprimirSoma(2,3)


/* ----------
---------- */

// Armazenando uma função arrow em uma variável (forma reduzida de construir uma função)

const soma = (a, b) => {
    return a + b
}
console.log('Arrow function, resultado =',soma(3,5))

/* ----------
---------- */

// Retorno implícito da função  - Quando retorna apenas um resultado

const subtracao = (a, b) => a-b
console.log('Retorno implicito, =', subtracao(4, 1))