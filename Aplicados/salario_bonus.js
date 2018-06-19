function salarioV2(nome, salario, total_vendas){
  let bonus = (total_vendas / 100) * 15 + salario
  return console.log(`O salário de ${nome}foi de = R$${bonus}`)
}

salarioV2('Carol', 500.00, 1230.30)