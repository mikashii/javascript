/**
 * Código não executavel
 *
 * Procedural
 */

const produto = new Object();
produto.nome = "Cadeira";
produto.preco = 200;
delete produto.preco;

const carro = {
  modelo: "A4",
  valor: 89000,
  proprietario: {
    nome: "Carol",
    idade: 24,
    endereco: {
      logradouro: "Rua abc",
      numero: 1000
    }
  },
  condutores: [{
    nome: "Laís",
    idade: 19
  },{
    nome: "Carolina",
    idade: 24
  }]
};

console.log(carro.condutores[1]);

delete carro.condutores
console.log(carro);
