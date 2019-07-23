const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) { //Switch não retorna verdadeiro ou falso, retorna apenas um valor dentro dos casos
    //As operações seguintes são executadas apenas com o uso do 'Break' para que a próxima linha possa ser executada.
    case 10:
    case 9:
      console.log('Quadro de honra')
      break
    case 8:
    case 7:
      console.log('Aprovado')
      break

    case 6:
    case 5:
    case 4:
      console.log('Recuperação')
      break

    case 3:
    case 2:
    case 1:
    case 0:
      console.log('Reprovado')
      break

    default:
      console.log('Nota inválida')
  }
  console.log('Fim')
}

imprimirResultado(10)
imprimirResultado(1)
imprimirResultado(5)


// O Switch não trabalha com condições.

// Switch => seleção multipla, não é uma expressão relacional, por padrão é necessários usar "break" para executar cada passo do switch

//Default => pode ficar em qualquer lugar, mas é necessário adicionar o break.