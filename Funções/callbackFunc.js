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
<<<<<<< HEAD
fabricantes.forEach((fabricante) => {console.log(fabricante)});
=======
fabricantes.forEach(fabricante => console.log(fabricante)) //Somente um parâmetro que é o nome de cada valor da array
>>>>>>> fa39fa44d62a90c19c6a1a7870cd104a549c2a08




// Semm callback

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
let notasBaixas = []
for (i in notas){
  if (notas[i] < 7){
    notasBaixas.push(notas[i])
  }
}
console.log(notasBaixas)


// com callback
const notasBaixas2 = notas.filter(nota => nota < 7) // com arrow function
console.log(notasBaixas2)
