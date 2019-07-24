// Função em JS é First-class Object
// Higher order function


//Criar função de forma literal possui nome e é declarada da forma abaixo.
// (pode conter ou não, parâmetros)

    function fun1 () {
        //bloco de código
    }


// Armazenar uma função em uma variavel.
// Uma função anonima atribuida à constante.

const fun2 = function () {
 //bloco de código
} //fun2()




// Armazenar dentro de um array 
                                                    //Armazenar anonima (maiss comum)
const array = [function (a, b) {return a + b},   fun1, fun2] //Declarando dentro da array

console.log(array[0](2, 3))
// Função do índice 0, passando os parâmetros 2 e 4



// Função dentro de atributos de objeto.

const obj = {}
    obj.falar = function () {return 'Objeto falante'}
console.log(obj.falar())  //Invocando a função dentro da chave 'falar'



// Passar função como parametro
function run(função){
    função() 
}

run(function(){console.log('Executando...')})



// Uma função pode retornar/conter uma função

function soma(a, b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2, 3)(4)

//usando variavel...
const cincoMais = soma (2, 3)
cincoMais(4)
