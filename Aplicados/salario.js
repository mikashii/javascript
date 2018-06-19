function calculo_salario(n, horas, salario){
let remuneracao = parseFloat(horas * salario).toFixed(2)
return console.log(`Number = ${n}\n Salary = U$ ${remuneracao}`)
}

calculo_salario(25, 100, 5.50)