{{{{{var sera = 'Sera?'}}}}} // var dentro de blocos de código
console.log(sera)


/* Escopo de variável 

- Quando declarada fora de uma função, ela é chamada de variável de escopo global
- Quando declarada dentro de uma função, ela é chamada de variável de escopo local do bloco em que foi inserida.
*/




/*
Variáveis Globais

- Variáveis globais são propriedades do objeto global. 
    Em páginas WEB é possivel acessar e configurar variáveis globais utilizando o window.nome_da_variavel
*/


// Quando definimos a variável dentro de uma função, o escopo é de função

// console.log(local)


                           // Usando var dois

var numero = 1
var Numero = 2
var numero_um = 3
{
    var numero = 34
    console.log('Dentro =', numero) // var dentro de escopo de bloco
}
console.log('Fora =', numero)
console.log(numero, Numero, numero_um)
