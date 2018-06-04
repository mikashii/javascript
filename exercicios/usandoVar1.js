{{{{{var sera = 'Sera?'}}}}}

console.log(sera)

// Uma variavel definida com VAR, só tem dois escopos possíveis

function teste(){
    var local =123
}
// Quando definimos a variável dentro de uma função, o escopo é de função

// console.log(local)

                                    // Usando var dois

var numero = 1
{
    var numero = 2
    console.log('Dentro =', numero)
}
console.log('Fora =', numero)
