/*  Arrays sao objetos globais
E servem para armazenar vários dados em uma única variável.
Exemplo de criação de uma array: 
    const produto = new Array ("Camiseta", " Calça", " Moletom", " Jaqueta");
Array a partir de um construtor

/*
const valores = [32.3, 121, 3, 1]
console.log(valores[0], valores[3])
*/
const valores = new Array ("Acima de R$ 10,00", "Acima de R$ 20,00", "Acima de R$ 30,00")
const produto = new Array ("Camiseta", " Calça", " Moletom", " Jaqueta");
console.log(produto[3],produto[2])
console.log(valores)
document.getElementById('id1').innerHTML = produto;
