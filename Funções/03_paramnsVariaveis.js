function soma (){
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1.2, 2.2, 3.3))
console.log(soma(1.1, 2.2))
console.log(soma(1, 3, 5, 87, 3))