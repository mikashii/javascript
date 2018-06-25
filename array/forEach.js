/*
aprovados.forEach((nome, indice) => {
  console.log(`${indice + 1}) ${nome}`)
})
// percorre todos os indices da array
aprovados.forEach((nome) => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
*/

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];





Array.prototype.forEach2 = function (callback){
  for (i = 0; i < this.length; i++){
    callback(this[i], i, this)
  }
}
aprovados.forEach2(function(nome, indice){
  console.log(`${indice}) ${nome}`)
})