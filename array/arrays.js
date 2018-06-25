/*  Arrays sao objetos globais
E servem para armazenar vários dados em uma única variável.
Exemplo de criação de uma array: 
    const produto = new Array ("Camiseta", " Calça", " Moletom", " Jaqueta");
Array a partir de um construtor

/*
const valores = [32.3, 121, 3, 1]
console.log(valores[0], valores[3])
*/
const valores = new Array(
    "Acima de R$ 10,00",
    "Acima de R$ 20,00",
    "Acima de R$ 30,00"
);
const produto = new Array("Camiseta", " Calça", " Moletom", " Jaqueta");
console.log(produto[3], produto[2]);
console.log(valores);

console.log(valores.length);

const names = ["Jhon", "Jane", "Mark"];
const years = new Array(1998, 1969, 1948);

console.log(names[1]);
names[1] = "Carol"; // Modificar o index número 1 para 'carol'
console.log(names[1]);
const Jhon = ["Jhon", "Smith", 1990, "Teacher", false];
console.log(Jhon);

Jhon.push("Blue") // adiciona um elemtento no fim da array
console.log(Jhon)
// [ 'Jhon', 'Smith', 1990, 'Teacher', false, 'Blue' ]

Jhon.unshift("Mr.") // adiciona um elemento no começo de um array.
console.log(Jhon)
// [ 'Mr.', 'Jhon', 'Smith', 1990, 'Teacher', false, 'Blue' ]

Jhon.pop() // remove o último valor da array
Jhon.shift() // remove o primeiro valor da array
Jhon.splice() // Pode adicionar e remover elementos da array
//Adicionar
Jhon.splice(1, 0, "Caete") //adiciona ao indice zero, não remove ninguém, e adicona no indíce 0 o "Caete"
console.log(Jhon)
//Remover através do splice
Jhon.splice(0, 1) //do indice zero, remove apenas um
console.log(Jhon)

//Slice - retorna um novo array.
const newJhon = Jhon.slice(3)
console.log(`!!!!!!!!!!!!!!!!!!!${newJhon}`)
const oldJhon = Jhon.slice(0, 2) //pega do 0 ao indice 2, mas não adc o 2
console.log(oldJhon)

/**
 * 
 */



// IndexOf pode ser armazenado em um variavel ou retornado por um alert
const index = Jhon.indexOf("Smith")
console.log(index)

// Condição que irá verificar se jhon é um professor, o resultado de um indice que não está na array deverá retornar - 1
if (Jhon.indexOf("Teacher") === -1) {
    console.log("Jhon não é um professor")
} else {
    console.log("Jhon é um professor! \n")

}



const anos = [1994, 1999, 2001];
const matriz = [];
for (i = 0; i < anos.length; i++) {
    matriz[i] = 2018 - anos[i];
}
console.log(matriz)