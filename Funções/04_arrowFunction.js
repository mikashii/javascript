// This serve para referenciar o objeto atual daquela execução
 let dobro = function (a){
   return 2 * a
 }

 // é o mesmo que

 dobro = (a) => {return 2 * a}
 
 dobro = a =>  2 * a // return implícito
 // A função arrow sempre é anônima, tera que sempre ser armazenada em uma variável
 console.log(dobro(Math.PI))

 let ola = function () {
   return 'Olá'
 }

 ola = () => 'Olá' // return implícito
 console.log(ola())


 const media = (n1, n2) =>{
  n1++ 
  return n1 + n2 / 2
 }
 console.log(media(2,3))

 