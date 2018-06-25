/* function Pessoa (){
    this.idade = 0
    setInterval (()=>{
        this.idade++
        console.log(this.idade)
    }, 1000)
}
*/


let dobro = (a) => {
    return 2 * a
}
console.log(dobro(2))

//quando apenas é setado um único parâmetro 

dobro = a => 2 * a;   //retorno da função implícito
