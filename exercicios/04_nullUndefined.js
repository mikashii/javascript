/* const a = {
  name: 'teste'
}
console.log(a)
const b = a 
console.log(b)

/*
Por que não é possível trocar o valor da Const a para 3 mas é possível trocar o valor de a.name para "Opa"?

Acredito de no tópico de objetos ele tenha explicado, mas quando você aponta uma variável para um objeto, a variável, no caso o 'const a', aponta para o endereço da memoria que se encontra o objeto. Isso significa que você não pode alterar o endereço que essa variável esta apontando, porem você consegue alterar o objeto em si.

/* Aqui você cria um objeto, esse objeto é armazenado em um local na memoria,
e a variável aponta para o endereço que se encontra o objeto. */

               //const a = { nome: "João"};
  
/* Aqui você não consegue alterar a variável, porque ela é uma constante, e no caso você esta tentando
atribuir o endereço de outro objeto para ela. */
       // a = {};
 
/* Já aqui você consegue alterar o atributo 'nome', porque se trata do atributo do objeto, e não da variável,
a variável simplesmente aponta pro local onde o objeto está.
        a.nome = "Maria"; 


*/
let valor // variável não definida
console.log(valor)
// Retorna undefined

valor = null // Ausência de valor, você pode "zerar" a variavel, vc está declarado ela como nula

const produto = {}
console.log(produto.preço) // Undefined pois a chave 'preço' ainda não foi definida

console.log(produto)
  produto.preco = 3.50
  console.log(produto)

produto.preco = undefined // Nunca faça isso
delete produto.preco   // Use o DELTE para deletar o attributo
console.log(produto)