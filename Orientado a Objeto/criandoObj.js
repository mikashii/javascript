// Usando notação literal

const obj1 = {}

// Object em JS
obj2 = new Object;

//Funções construtoras
function Produto (nome, preco, desc){
  this.nome = nome;
  this.preco = preco;
  this.desc = desc;
}

const cadeira = new Produto("Cadeira", 400, 15)
console.log(cadeira)

const pessoa ={
  nome: "Carolina"
}
/**
 * 
 * 
*/