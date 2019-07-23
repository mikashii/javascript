/**
 * Funções Callback
 * Passar uma função para outra função quando um determinado evento acontecer, passando essa função de volta 'callback'
 *
 */

 const fabricantes = ['Mercedes', 'audi', 'Bmw']
 
function imprimir(nome, indice){
  console.log(`${indice + 1}. ${nome} `)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante){
  console.log(fabricante)
}

/*
// Semm callback

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
let notasBaixas = []
for (i in notas){
  if (notas[i] < 7){
    notasBaixas.push(notas[i])
  }
}
console.log(notasBaixas)

// Sem callback

notasBaixas = notas.filter(function(nota){
  return nota < 7
})
console.log(notasBaixas)

const notasBaixas2 = notas.filter((nota) => nota < 7) // com arrow function
console.log(notasBaixas2)

document.getElementsByTagName('body')[0].onclick = function (e) {
  console.log('O Evento ocorreu')
}

*/