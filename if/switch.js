const imprimirResultado = function(nota){
  switch (Math.floor(nota)){   //Switch é feito para mltiplas seleções, na expressao dele naoo retorna verdadeiro ou falso, retorna valor
    case 10:
      console.log('Eita')
      break
    case 9:
      console.log("Quadro de honra")
    break
    case 5:
      console.log('Reprovado!')
      break
  }
}

imprimirResultado(9)
imprimirResultado(5)
imprimirResultado(10)