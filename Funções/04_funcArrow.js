function Pessoa (){
    this.idade = 0
    setInterval (()=>{
        this.idade++
        console.log(this.idade)
    }, 1000)
}


const dobro = (n) => n * 2; // quando será retornado apenas um parâmetro
console.log(dobro(2))

function Pessoa () {
    this.idade = 0

    setInterval(() =>{
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new Pessoa