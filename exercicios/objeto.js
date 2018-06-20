const prod1 = {} // Uma array vazia, abaixo são adicionadas as chaves e os valores
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4000
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço

// outra forma de sentença para criar a array


const Carolina = {
  Nome: "Carolina",
  lastName: "Portas",
  yearOfBirth: 1994,
  job: "Web developer",
  isMarried: false
}
console.log(Carolina) // exibe todo  o conteúdo do objeto
console.log(["job"]) // exibe a key 'job'. É necessário passar a chave como uma string


console.log(["lastName"])
const trabalho = 'job'  //cria uma variavel a partir da key do objeto "Carolina"
const sobreNome = 'lastName'    // 


console.log(Carolina[trabalho]) // atribui um valor a variável 'trabalho' vindo do objeto 'Carolina' usa-se os brackets
console.log(Carolina[sobreNome])
//                     variavel 