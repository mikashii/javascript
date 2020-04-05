//Classe
class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome,
            this.idade = idade,
            this.profissao = profissao
    }
    falar() {
        console.log(`Meu nome é ${this.nome}, e tenho ${this.idade} anos, e atualmente sou ${this.profissao}`)
    }
}
const pessoa2 = new Pessoa('Felipe Pinto', 24, 'Desenvolvedor')
pessoa2.falar()


//Função factory


function criarPessoa(nome, idade, profissao) {
    this.nome = nome
    this.idade = idade
    this.profissao = profissao

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}, e tenho ${this.idade} anos, e atualmente sou ${this.profissao}`)
    }
}
const pessoa1 = new criarPessoa('Carolina', 24, 'Desenvolvedora')
pessoa1.falar()