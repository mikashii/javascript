//Criando obj sem uma função factory, teria que ser feita da forma abaixo diversas vezes
const prod1 = {
    nome: '...',
    preco: 45
}

//Com factory function

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())

/**
 *  
 */

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook', '3999,99'))