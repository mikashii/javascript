function area (valor1, valor2, valor3){
    const triangulo = valor1 * valor3 / 2
    const raio = Math.pow(valor3,2) * 3.14159
    const trapezio = valor1 + valor2 / 2 * valor3

    return console.log(`Triangulo: ${triangulo.toFixed(3)}\nCirculo: ${raio.toFixed(3)}\nTrapézio: ${trapezio.toFixed(3)}`)
}


area(3.0, 4.0, 5.2)
//3.0 4.0 5.2