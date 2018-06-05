// Novo recurso ES2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereço: {
    logradouro: 'Rua abc',
    numero: 1000
  }
}
const {nome,idade} = pessoa //Tire de dentro do objeto, os atributos nome e idade. Qual objeto? = pessoa, linha 3
console.log(nome,idade)
// const {}    <-- operador destructure
const {nome: n, idade: i} = pessoa // tire o atributo nome e cria uma variável 'n'
console.log(n,i)

// quando os atributos não existem

const {sobrenome, bemHmorada = true} = pessoa // Define 'true' para bem humorada por padrão (caso não haja o atributo dentro de pessoa)
console.log(sobrenome, bemHmorada)


  const{endereço: {logradouro, numero}} = pessoa // acessando atributos dentro de outro objeto
  console.log(logradouro, numero)

  /*

  ------------------------- Utilizando dentro de uma function   ------------------------

  */

  function rand ({ min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
  }
  console.log(rand({min : 593}))
  console.log(rand({}))