function area (largura, altura) {
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return false
    }
}
console.log(area(10,10))
//Uma função que não retorna nada.